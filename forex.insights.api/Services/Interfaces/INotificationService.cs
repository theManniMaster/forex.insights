using forex.insights.api.Entities.ForexAlerts;

namespace forex.insights.api.Services.Interfaces
{
    /// <summary>
    /// Interface to send notifications.
    /// </summary>
    public interface INotificationService
    {
        /// <summary>
        /// Sends Notification.
        /// </summary>
        /// <param name="activeAlert">Active Alert.</param>
        /// <param name="currentRate">Current Rate.</param>
        /// <param name="to">Recipient.</param>
        /// <returns>Task.</returns>
        Task SendAsync(ForexAlert activeAlert, double currentRate, string to);
    }
}
