namespace forex.insights.api.Services.Interfaces
{
    /// <summary>
    /// Interface for the AlertCleanupService.
    /// </summary>
    public interface IAlertCleanupService
    {
        /// <summary>
        /// Remove alerts that are marked completed.
        /// </summary>
        Task CleanupAlertsAsync();
    }
}
