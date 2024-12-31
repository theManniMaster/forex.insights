using forex.insights.api.Data;
using forex.insights.api.Services.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace forex.insights.api.Services
{
    /// <summary>
    /// Implementation of User Service.
    /// </summary>
    public class UserService(UserIdentityDbContext dbContext) : IUserService
    {
        /// <inheritdoc />
        public async Task<IEnumerable<IdentityUser>> GetVerifiedUsersAsync()
        {
            return await dbContext.Users.Where(u => u.EmailConfirmed).ToListAsync();
        }
    }
}
