using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace forex.insights.api.Utilities
{
    /// <summary>
    /// API Controller base class.
    /// </summary>
    [ApiController]
    public class BaseApiController : ControllerBase
    {
        /// <summary>
        /// Get current user's Id.
        /// </summary>
        /// <returns>User Id, if exists.</returns>
        protected Guid? GetUserId()
        {
            var userIdClaim = HttpContext.User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value;

            if (!string.IsNullOrEmpty(userIdClaim) && Guid.TryParse(userIdClaim, out var userId))
                return userId;

            return null;
        }

        /// <summary>
        /// Get current user's email.
        /// </summary>
        /// <returns>Email, if exists.</returns>
        protected string? GetUserEmail()
        {
            return HttpContext.User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Email)?.Value;
        }
    }
}
