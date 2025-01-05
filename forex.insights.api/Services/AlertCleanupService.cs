using forex.insights.api.Data;
using forex.insights.api.Entities.ForexAlerts;
using forex.insights.api.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace forex.insights.api.Services
{
    /// <summary>
    /// Implementation of the AlertCleanupService.
    /// </summary>
    /// <param name="dbContext">The database context.</param>
    public class AlertCleanupService(ForexAlertDbContext dbContext) : IAlertCleanupService
    {
        private const int _idleDays = 10;

        /// <inheritdoc />
        public async Task CleanupAlertsAsync()
        {
            var idleAlerts = await GetIdleAlerts();

            foreach (var alert in idleAlerts)
            {
                dbContext.ForexAlerts.Remove(alert);
            }

            await dbContext.SaveChangesAsync();
        }

        /// <summary>
        /// Get alerts that are completed and have been idle for a certain number of days.
        /// </summary>
        /// <returns>List of alerts.</returns>
        private async Task<IEnumerable<ForexAlert>> GetIdleAlerts()
        {
            return await dbContext.ForexAlerts
                .Where(alert => 
                    !alert.IsActive 
                    && alert.LastSentTime.HasValue 
                    && alert.LastSentTime.Value < DateTime.UtcNow.AddDays(-_idleDays)
                ).ToListAsync();
        }
    }
}
