using forex.insights.api.Entities.ForexAlerts;

namespace forex.insights.api.Utilities.Notifications.Interfaces
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
        /// <returns>True if success.</returns>
        Task<bool> SendAsync(ForexAlert activeAlert, decimal currentRate, string to);
    }
}
