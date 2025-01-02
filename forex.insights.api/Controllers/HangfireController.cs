using forex.insights.api.Services.Interfaces;
using forex.insights.api.Utilities;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace forex.insights.api.Controllers
{
    /// <summary>
    /// Controller for Hangfire.
    /// </summary>
    /// <param name="hangfireService">Hangfire service.</param>
    /// <param name="configuration">Configuration.</param>
    [Route("api/[controller]")]
    public class HangfireController(IHangfireService hangfireService, IConfiguration configuration) : BaseApiController
    {
        /// <summary>
        /// Get login page for hangfire dashboard.
        /// </summary>
        /// <returns>HTML page.</returns>
        [HttpGet("login")]
        [ProducesResponseType(typeof(string), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.NotFound)]
        public ActionResult<string> GetLoginPage()
        {
            var baseUrl = configuration.GetValue("BaseUrl", "");

            if (string.IsNullOrEmpty(baseUrl))
                return NotFound();

            var endpoint = $"{baseUrl}/login?useCookies=true";

            return base.Content(hangfireService.GetLoginPage(endpoint), "text/html");
        }
    }
}
