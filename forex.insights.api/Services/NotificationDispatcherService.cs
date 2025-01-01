using forex.insights.api.Entities.ForexAlerts;
using forex.insights.api.Entities.ForexAlerts.Enums;
using forex.insights.api.Services.Interfaces;
using forex.insights.api.Utilities.Notifications;
using forex.insights.api.Utilities.Notifications.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace forex.insights.api.Services
{
    /// <summary>
    /// Implementation of NotificationDispatcherService.
    /// </summary>
    /// <param name="forexAlertService">Forex Alert Service.</param>
    /// <param name="userService">User Service.</param>
    /// <param name="exchangeRateService">Exchange Rate Service.</param>
    /// <param name="configuration">Configuration.</param>
    /// <param name="logger">Logger.</param>
    public class NotificationDispatcherService(IForexAlertService forexAlertService,
        IUserService userService,
        IExchangeRateService exchangeRateService,
        IConfiguration configuration,
        ILogger<INotificationDispatcherService> logger) : INotificationDispatcherService
    {
        private const int _bufferHour = 1;

        /// <inheritdoc />
        public async Task DispatchAsync()
        {
            var verifiedUsers = await userService.GetVerifiedUsersAsync();

            if (verifiedUsers == default || !verifiedUsers.Any())
                return;

            var userIdToEmailMap = verifiedUsers.ToDictionary(f => f.Id, f => f.Email);
            var activeAlerts = await GetAlertsAsync(userIdToEmailMap);

            foreach (var alert in activeAlerts)
            {
                await DispatchIfCriteriaMetAsync(alert, userIdToEmailMap);
            }
        }

        /// <summary>
        /// Get alerts based on last sent time and alert frequency.
        /// </summary>
        /// <param name="userIdToEmailMap">User id to email map.</param>
        /// <returns>Alerts Collection.</returns>
        private async Task<IEnumerable<ForexAlert>> GetAlertsAsync(Dictionary<string, string?> userIdToEmailMap)
        {
            var alerts = await forexAlertService
                .GetActiveAlertsByUserIdsAsync([.. userIdToEmailMap.Keys]);

            var frequencyMap = new Dictionary<NotificationFrequency, int>
            {
                { NotificationFrequency.Once, 0 }, // Once doesn't need any frequency check
                { NotificationFrequency.Daily, 1 },
                { NotificationFrequency.Weekly, 7 }
            };

            var activeAlerts = new List<ForexAlert>();

            foreach (var alert in alerts)
            {
                if (frequencyMap.TryGetValue(alert.Frequency, out var daysToAdd))
                {
                    if (alert.Frequency == NotificationFrequency.Once)
                    {
                        activeAlerts.Add(alert);
                    }
                    else if (!alert.LastSentTime.HasValue || alert.LastSentTime.Value.AddDays(daysToAdd) < DateTime.UtcNow.AddHours(_bufferHour))
                    {
                        activeAlerts.Add(alert);
                    }
                }
            }

            return activeAlerts;
        }

        /// <summary>
        /// Dispatch notification if minimum rate criteria is met.
        /// </summary>
        /// <param name="alert">Alert to be sent.</param>
        /// <param name="userIdToEmailMap">User Id to email map.</param>
        /// <returns>Task.</returns>
        private async Task DispatchIfCriteriaMetAsync(ForexAlert alert, Dictionary<string, string?> userIdToEmailMap)
        {
            var service = GetNotificationService(alert.ContactMethod);
            var email = userIdToEmailMap.GetValueOrDefault(alert.UserId.ToString(), "");

            if (service == default || string.IsNullOrEmpty(email))
                return;

            var currentRate = await exchangeRateService.GetExchangeRateAsync(alert.FromCurrency, alert.ToCurrency);

            if (currentRate >= alert.MinimumRate)
            {
                var success = await service.SendAsync(alert, currentRate, email);

                if (!success)
                    logger.LogError($"Failed to send notification for alert {alert.Id}.");
                else
                    await UpdateAlertStatusAsync(alert);
            }
        }

        /// <summary>
        /// Get Notification Service based on contact method.
        /// </summary>
        /// <param name="contactMethod">Contact method.</param>
        /// <returns>INotificationService, if exists.</returns>
        private INotificationService? GetNotificationService(ContactMethod contactMethod)
        {
            return contactMethod switch
            {
                ContactMethod.Sms => null, // coming soon.
                _ => GetEmailService(),
            };
        }

        /// <summary>
        /// Get Email Service.
        /// </summary>
        /// <returns>INotificationService, if exists.</returns>
        private INotificationService? GetEmailService()
        {
            var apiKey = configuration.GetValue<string>("SendGridApiKey");
            var fromEmail = configuration.GetValue<string>("SendGridFromEmail");

            if (string.IsNullOrEmpty(apiKey) || string.IsNullOrEmpty(fromEmail))
            {
                logger.LogError("Missing SendGrid Data.");
                return null;
            }

            return new EmailService(apiKey, fromEmail);
        }

        /// <summary>
        /// Update alert status based on frequency.
        /// </summary>
        /// <param name="alert">Alert to be updated.</param>
        /// <returns>Task.</returns>
        private async Task UpdateAlertStatusAsync(ForexAlert alert)
        {
            if (alert.Frequency == NotificationFrequency.Once)
                alert.IsActive = false;

            alert.LastSentTime = DateTime.UtcNow;

            await forexAlertService.UpdateAsync(alert);
        }
    }
}
