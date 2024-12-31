namespace forex.insights.api.Services.Interfaces
{
    /// <summary>
    /// Interface for NotificationDispatcherService.
    /// </summary>
    public interface INotificationDispatcherService
    {
        /// <summary>
        /// Dispatch notifications.
        /// </summary>
        Task DispatchAsync();
    }
}
