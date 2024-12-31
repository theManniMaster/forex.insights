using forex.insights.api.Entities.ForexAlerts;
using forex.insights.api.Templates;
using forex.insights.api.Utilities.Notifications.Interfaces;
using SendGrid;

namespace forex.insights.api.Utilities.Notifications
{
    /// <summary>
    /// Implementation of NotificationService.
    /// </summary>
    public class EmailService(string apiKey, string fromEmail) : INotificationService
    {
        /// <inheritdoc />
        public async Task<bool> SendAsync(ForexAlert activeAlert, decimal currentRate, string to)
        {
            var emailTemplate = new EmailTemplate();
            var message = emailTemplate.CreateMessage(activeAlert, fromEmail, to);
            var client = new SendGridClient(apiKey);
            var response = await client.SendEmailAsync(message);

            return response.IsSuccessStatusCode;
        }
    }
}
