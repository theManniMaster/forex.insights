using forex.insights.api.Entities.ForexAlerts;
using Microsoft.EntityFrameworkCore;

namespace forex.insights.api.Data
{
    /// <summary>
    /// Database context for ForexAlerts.
    /// </summary>
    /// <param name="options">Context options.</param>
    public class ForexAlertDbContext(DbContextOptions<ForexAlertDbContext> options) : DbContext(options)
    {
        /// <summary>
        /// Forex Alert data set.
        /// </summary>
        public DbSet<ForexAlert> ForexAlerts { get; set; }
    }
}
