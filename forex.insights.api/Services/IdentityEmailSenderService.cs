using forex.insights.api.Templates;
using Microsoft.AspNetCore.Identity.UI.Services;
using SendGrid;

namespace forex.insights.api.Services
{
    /// <summary>
    /// Service to send email verification related notifications.
    /// </summary>
    /// <param name="configuration">Configuration settings.</param>
    public class IdentityEmailSenderService(IConfiguration configuration) : IEmailSender
    {
        /// <inheritdoc />
        public async Task SendEmailAsync(string email, string subject, string htmlMessage)
        {
            var apiKey = configuration.GetValue<string>("SendGridApiKey");
            var fromEmail = configuration.GetValue<string>("SendGridFromEmail");

            if (string.IsNullOrEmpty(apiKey) || string.IsNullOrEmpty(fromEmail))
                return;

            var emailTemplate = new VerificationEmailTemplate(fromEmail, email, subject, htmlMessage);
            var message = emailTemplate.CreateMessage();
            message.SetClickTracking(false, false);

            var client = new SendGridClient(apiKey);
            await client.SendEmailAsync(message);
        }
    }
}
