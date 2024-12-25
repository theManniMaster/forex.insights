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
        private readonly ForexAlertDbContext _dbContext = dbContext;

        /// <inheritdoc />
        public async Task<ForexAlert?> GetAsync(Guid id)
        {
            return await _dbContext.ForexAlerts.FirstOrDefaultAsync(alert => alert.Id == id);
        }

        /// <inheritdoc />
        public async Task<IEnumerable<ForexAlert>> GetAsync(IEnumerable<Guid> ids, Guid userId)
        {
            return await _dbContext.ForexAlerts.Where(f => f.UserId == userId && ids.Contains(f.Id)).ToListAsync();
        }

        /// <inheritdoc />
        public async Task<IEnumerable<ForexAlert>> GetAllAsync(Guid userId)
        {
            return await _dbContext.ForexAlerts.Where(f => f.UserId == userId).ToListAsync();
        }

        /// <inheritdoc />
        public async Task InsertAsync(ForexAlert alert)
        {
            await _dbContext.ForexAlerts.AddAsync(alert);
            await _dbContext.SaveChangesAsync();
        }

        /// <inheritdoc />
        public async Task UpdateAsync(ForexAlert updatedAlert)
        {
            _dbContext.ForexAlerts.Update(updatedAlert);
            await _dbContext.SaveChangesAsync();
        }

        /// <inheritdoc />
        public async Task DeleteAsync(ForexAlert toBeDeleted)
        {
            _dbContext.ForexAlerts.Remove(toBeDeleted);
            await _dbContext.SaveChangesAsync();
        }
    }
}
