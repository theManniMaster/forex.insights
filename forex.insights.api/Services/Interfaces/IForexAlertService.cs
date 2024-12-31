using forex.insights.api.Entities.ForexAlerts;

namespace forex.insights.api.Services.Interfaces
{
    /// <summary>
    /// Interface for ForexAlertService.
    /// </summary>
    public interface IForexAlertService
    {
        /// <summary>
        /// Gets a ForexAlert by its Id.
        /// </summary>
        /// <param name="id">Alert Id.</param>
        /// <returns>Alert or default.</returns>
        Task<ForexAlert?> GetAsync(Guid id);

        /// <summary>
        /// Search ForexAlerts by Ids.
        /// </summary>
        /// <param name="ids">Alert Ids.</param>
        /// <param name="userId">User Id.</param>
        /// <returns>Requested Alerts.</returns>
        Task<IEnumerable<ForexAlert>> GetAsync(IEnumerable<Guid> ids, Guid userId);

        /// <summary>
        /// Gets all ForexAlerts from the database.
        /// </summary>
        /// <param name="userId">User Id.</param>
        /// <returns>Alerts Data.</returns>
        Task<IEnumerable<ForexAlert>> GetAllAsync(Guid userId);

        /// <summary>
        /// Get Alerts by User Ids.
        /// </summary>
        /// <param name="userIds">User ids.</param>
        /// <returns>Alerts Data.</returns>
        Task<IEnumerable<ForexAlert>> GetAlertsByUserIdsAsync(HashSet<string> userIds);

        /// <summary>
        /// Inserts a new ForexAlert into the database.
        /// </summary>
        /// <param name="alert">New Alert.</param>
        /// <returns>Task.</returns>
        Task InsertAsync(ForexAlert alert);

        /// <summary>
        /// Updates an existing ForexAlert.
        /// </summary>
        /// <param name="updatedAlert">Updated Alert.</param>
        /// <returns>Task.</returns>
        Task UpdateAsync(ForexAlert updatedAlert);

        /// <summary>
        /// Deletes a ForexAlert.
        /// </summary>
        /// <param name="toBeDeleted">To be deleted Alert.</param>
        /// <returns>Task.</returns>
        Task DeleteAsync(ForexAlert toBeDeleted);
    }
}
