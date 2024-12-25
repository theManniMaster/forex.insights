using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace forex.insights.api.Data
{
    /// <summary>
    /// Database context for user identity.
    /// </summary>
    /// <param name="options">Context options.</param>
    public class UserIdentityDbContext(DbContextOptions<UserIdentityDbContext> options)
        : IdentityDbContext<IdentityUser>(options)
    {
    }
}
