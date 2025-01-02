using Microsoft.AspNetCore.Identity;

namespace forex.insights.api.Services.Interfaces
{
    /// <summary>
    /// Interface for User Service.
    /// </summary>
    public interface IUserService
    {
        /// <summary>
        /// Gets a user by its Id.
        /// </summary>
        /// <param name="id">User Id.</param>
        /// <returns>User or default.</returns>
        Task<IdentityUser?> GetAsync(Guid id);

        /// <summary>
        /// Deletes a user.
        /// </summary>
        /// <param name="user">To be deleted user.</param>
        /// <returns>Task.</returns>
        Task DeleteAsync(IdentityUser user);

        /// <summary>
        /// Get users who have verified their email.
        /// </summary>
        /// <returns>Users collection.</returns>
        Task<IEnumerable<IdentityUser>> GetVerifiedUsersAsync();
    }
}
