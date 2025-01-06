using forex.insights.api.Data;
using forex.insights.api.DataModels;
using forex.insights.api.Entities.ForexAlerts;
using forex.insights.api.Services.Interfaces;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

namespace forex.insights.api.Services
{
    /// <summary>
    /// Implementation of IForexAlertService.
    /// </summary>
    /// <param name="dbContext">Database context.</param>
    public class ForexAlertService(ForexAlertDbContext dbContext) : IForexAlertService
    {
        private const int _maxAlertCount = 8;

        /// <inheritdoc />
        public async Task<ForexAlert?> GetAsync(Guid id)
        {
            return await dbContext.ForexAlerts.FirstOrDefaultAsync(alert => alert.Id == id);
        }

        /// <inheritdoc />
        public async Task<IEnumerable<ForexAlert>> GetAsync(IEnumerable<Guid> ids, Guid userId)
        {
            return await dbContext.ForexAlerts.Where(f => f.UserId == userId && ids.Contains(f.Id)).ToListAsync();
        }

        /// <inheritdoc />
        public async Task<IEnumerable<ForexAlert>> GetAllAsync(Guid userId)
        {
            return await dbContext.ForexAlerts.Where(f => f.UserId == userId).ToListAsync();
        }

        /// <inheritdoc />
        public async Task<IEnumerable<ForexAlert>> GetActiveAlertsByUserIdsAsync(HashSet<string> userIds)
        {
            return await dbContext.ForexAlerts
                .Where(f => f.IsActive && userIds.Contains(f.UserId.ToString()))
                .ToListAsync();
        }

        /// <inheritdoc />
        public async Task<(bool, string)> InsertAsync(ForexAlert forexAlert, Guid userId)
        {
            var existingAlerts = await GetAllAsync(userId);

            if (existingAlerts.Count() >= _maxAlertCount)
            {
                return (false, $"You have reached the maximum limit of {_maxAlertCount} alerts.");
            }
            else if (existingAlerts.Any(alert => alert.FromCurrency == forexAlert.FromCurrency && alert.ToCurrency == forexAlert.ToCurrency))
            {
                return (false, $"Alert for {forexAlert.FromCurrency} to {forexAlert.ToCurrency} already exists.");
            }

            await dbContext.ForexAlerts.AddAsync(forexAlert);
            await dbContext.SaveChangesAsync();

            return (true, "");
        }

        /// <inheritdoc />
        public async Task UpdateAsync(ForexAlert updatedAlert)
        {
            dbContext.ForexAlerts.Update(updatedAlert);
            await dbContext.SaveChangesAsync();
        }

        /// <inheritdoc />
        public async Task DeleteAsync(ForexAlert toBeDeleted)
        {
            dbContext.ForexAlerts.Remove(toBeDeleted);
            await dbContext.SaveChangesAsync();
        }

        /// <inheritdoc />
        public async Task DeleteAllAsync(string userId)
        {
            const string parameterName = "@userId";
            var query = $"DELETE FROM ForexAlerts WHERE UserId = {parameterName};";

            await dbContext.Database.ExecuteSqlRawAsync(query, new SqlParameter(parameterName, userId));
        }
    }
}
