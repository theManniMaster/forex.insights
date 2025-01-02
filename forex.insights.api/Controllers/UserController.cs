using forex.insights.api.Services.Interfaces;
using forex.insights.api.Utilities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace forex.insights.api.Controllers
{
    /// <summary>
    /// User API Endpoint.
    /// </summary>
    /// <param name="userService">User service.</param>
    [Route("api/[controller]")]
    [Authorize]
    public class UserController(IUserService userService) : BaseApiController
    {
        /// <summary>
        /// Delete a user.
        /// </summary>
        /// <returns>Response.</returns>
        [HttpDelete]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.NotFound)]
        [ProducesResponseType((int)HttpStatusCode.Unauthorized)]
        public async Task<ActionResult> DeleteAsync()
        {
            var userId = GetUserId();

            if (!userId.HasValue)
                return Unauthorized();

            var user = await userService.GetAsync(userId.Value);

            if (user == default)
                return NotFound();

            await userService.DeleteAsync(user);

            return Ok();
        }
    }
}
