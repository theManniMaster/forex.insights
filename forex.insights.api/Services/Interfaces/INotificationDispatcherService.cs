using forex.insights.api.Entities.ForexAlerts;

namespace forex.insights.api.Services.Interfaces
{
    /// <summary>
    /// Interface for NotificationDispatcherService.
    /// </summary>
    public interface INotificationDispatcherService
    {
        /// <summary>
        /// Setup notifications dispatch for all users.
        /// </summary>
        Task SetupDispatchAsync();

        /// <summary>
        /// Dispatch notification if minimum rate criteria is met.
        /// </summary>
        /// <param name="alert">Alert to be sent.</param>
        /// <param name="userIdToEmailMap">User Id to email map.</param>
        /// <returns>Task.</returns>
        Task SendNotificationIfCriteriaMetAsync(ForexAlert alert, Dictionary<string, string?> userIdToEmailMap);
    }
}
