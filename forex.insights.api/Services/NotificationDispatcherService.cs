using forex.insights.api.Data;
using forex.insights.api.Entities.ForexAlerts.Enums;
using forex.insights.api.Services.Interfaces;
using forex.insights.api.Utilities.Notifications;
using forex.insights.api.Utilities.Notifications.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace forex.insights.api.Services
{
    /// <summary>
    /// Implementation of NotificationDispatcherService.
    /// </summary>
    /// <param name="forexAlertService">Forex Alert Service.</param>
    /// <param name="userService">User Service.</param>
    /// <param name="configuration">Configuration.</param>
    /// <param name="logger">Logger.</param>
    public class NotificationDispatcherService(IForexAlertService forexAlertService,
        IUserService userService,
        IConfiguration configuration, 
        ILogger<INotificationDispatcherService> logger) : INotificationDispatcherService
    {
        /// <inheritdoc />
        public async Task DispatchAsync()
        {
            var verifiedUsers = await userService.GetVerifiedUsersAsync();

            if (!verifiedUsers.Any())
                return;

            var userIdToEmailMap = verifiedUsers.ToDictionary(f => f.Id, f => f.Email);

            var activeAlerts = await forexAlertService
                .GetAlertsByUserIdsAsync([.. userIdToEmailMap.Keys]);

            foreach (var alert in activeAlerts)
            {
                var service = GetNotificationService(alert.ContactMethod);
                var userId = userIdToEmailMap.GetValueOrDefault(alert.UserId.ToString(), "");

                if (service == default || string.IsNullOrEmpty(userId))
                    continue;

                var currentRate = 0.0m; // get current rate from somewhere
                var success = await service.SendAsync(alert, currentRate, userId);

                if (!success)
                    logger.LogError($"Failed to send notification for alert {alert.Id}.");
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
    }
}
