using forex.insights.api.Entities.ForexAlerts;
using forex.insights.api.Services.Interfaces;
using forex.insights.api.Templates;
using SendGrid;

namespace forex.insights.api.Services
{
    /// <summary>
    /// Implementation of NotificationService.
    /// </summary>
    public class EmailService(IConfiguration configuration, ILogger<INotificationService> logger) : INotificationService
    {
        private readonly IConfiguration _configuration = configuration;
        private readonly ILogger<INotificationService> _logger = logger;

        /// <inheritdoc />
        public async Task SendAsync(ForexAlert activeAlert, double currentRate, string to)
        {
            var apiKey = _configuration.GetValue<string>("SendGridApiKey");
            var fromEmail = _configuration.GetValue<string>("SendGridFromEmail");

            if (string.IsNullOrEmpty(apiKey) || string.IsNullOrEmpty(fromEmail))
            {
                _logger.LogError("Missing SendGrid Data.");
                return;
            }

            var emailTemplate = new EmailTemplate();
            var message = emailTemplate.CreateMessage(activeAlert, fromEmail, to);
            var client = new SendGridClient(apiKey);
            var response = await client.SendEmailAsync(message);

            if (response.IsSuccessStatusCode)
                return;

            _logger.LogError($"Failed to send email. Error code: {response.StatusCode}.");
        }
    }
}
