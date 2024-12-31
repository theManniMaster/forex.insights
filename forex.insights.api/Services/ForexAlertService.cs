using forex.insights.api.Data;
using forex.insights.api.Entities.ForexAlerts;
using forex.insights.api.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace forex.insights.api.Services
{
    /// <summary>
    /// Implementation of IForexAlertService.
    /// </summary>
    public class ForexAlertService(ForexAlertDbContext dbContext) : IForexAlertService
    {
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
        public async Task InsertAsync(ForexAlert alert)
        {
            await dbContext.ForexAlerts.AddAsync(alert);
            await dbContext.SaveChangesAsync();
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
    }
}
