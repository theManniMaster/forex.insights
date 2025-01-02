using forex.insights.api.Data;
using forex.insights.api.Services.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace forex.insights.api.Services
{
    /// <summary>
    /// Implementation of User Service.
    /// </summary>
    /// <param name="dbContext">Database context.</param>
    /// <param name="forexAlertService">Forex alert service.</param>
    public class UserService(UserIdentityDbContext dbContext, IForexAlertService forexAlertService) : IUserService
    {
        /// <inheritdoc />
        public async Task<IdentityUser?> GetAsync(Guid id)
        {
            return await dbContext.Users.FirstOrDefaultAsync(u => u.Id == id.ToString());
        }

        /// <inheritdoc />
        public async Task DeleteAsync(IdentityUser user)
        {
            await forexAlertService.DeleteAllAsync(user.Id);

            dbContext.Users.Remove(user);
            await dbContext.SaveChangesAsync();
        }

        /// <inheritdoc />
        public async Task<IEnumerable<IdentityUser>> GetVerifiedUsersAsync()
        {
            return await dbContext.Users.Where(u => u.EmailConfirmed).ToListAsync();
        }
    }
}
