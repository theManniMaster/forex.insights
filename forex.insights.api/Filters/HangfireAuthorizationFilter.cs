using Hangfire.Dashboard;
using System.Security.Claims;

namespace forex.insights.api.Filters
{
    /// <summary>
    /// Authorization filter for Hangfire.
    /// </summary>
    /// <param name="adminEmail">Admin email.</param>
    public class HangfireAuthorizationFilter(string? adminEmail) : IDashboardAuthorizationFilter
    {
        /// <summary>
        /// Authorize the Hangfire dashboard.
        /// </summary>
        /// <param name="context">Dashboard Context.</param>
        /// <returns>If authorized.</returns>
        public bool Authorize(DashboardContext context)
        {
            if (string.IsNullOrEmpty(adminEmail))
            {
                return false;
            }

            var httpContext = context.GetHttpContext();
            var claims = httpContext.User.Claims;

            return claims.Any(c => c.Type == ClaimTypes.Email && c.Value == adminEmail);
        }
    }
}
