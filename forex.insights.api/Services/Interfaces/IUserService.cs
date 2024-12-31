using Microsoft.AspNetCore.Identity;

namespace forex.insights.api.Services.Interfaces
{
    /// <summary>
    /// Interface for User Service.
    /// </summary>
    public interface IUserService
    {
        /// <summary>
        /// Get users who have verified their email.
        /// </summary>
        /// <returns>Users collection.</returns>
        Task<IEnumerable<IdentityUser>> GetVerifiedUsersAsync();
    }
}
