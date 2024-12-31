using Microsoft.AspNetCore.Identity.UI.Services;

namespace forex.insights.api.Services
{
    /// <summary>
    /// Service to send email verification related notifications.
    /// </summary>
    public class IdentityEmailSenderService : IEmailSender
    {
        /// <inheritdoc />
        public Task SendEmailAsync(string email, string subject, string htmlMessage)
        {
            throw new NotImplementedException();
        }
    }
}
