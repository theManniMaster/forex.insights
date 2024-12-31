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
    /// <param name="dbContext">Forex Db Context.</param>
    /// <param name="configuration">Configuration.</param>
    public class NotificationDispatcherService(IForexAlertService forexAlertService, 
        IConfiguration configuration, 
        ILogger<INotificationDispatcherService> logger) : INotificationDispatcherService
    {
        /// <inheritdoc />
        public async Task Dispatch()
        {
            // this class will probably need a default constructor as well.

            //var activeAlerts = _dbContext.ForexAlerts.Where(f => f.IsActive);
            var activeAlerts = await forexAlertService.GetAllAsync(new Guid("e9805e28-c476-4cc0-aaa5-64afcd433c25"));

            foreach (var alert in activeAlerts)
            {
                var service = GetNotificationService(alert.ContactMethod);

                if (service == default)
                    continue;

                var currentRate = 0.0m; // get current rate from somewhere
                var success = await service.SendAsync(alert, currentRate, "mannimanpreet14@gmail.com");

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
                ContactMethod.Sms => null,
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
