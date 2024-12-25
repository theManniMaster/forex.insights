using forex.insights.api.DataModels.ForexAlerts;
using forex.insights.api.Entities.ForexAlerts;
using forex.insights.api.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace forex.insights.api.Controllers
{
    /// <summary>
    /// Forex Alert API Endpoint.
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class ForexAlertController(IForexAlertService forexAlertService) : ControllerBase
    {
        private readonly IForexAlertService _forexAlertService = forexAlertService;

        /// <summary>
        /// Get Forex Alert by Id.
        /// </summary>
        /// <param name="request">Get request.</param>
        /// <returns>Response.</returns>
        [HttpGet("{id}")]
        [ProducesResponseType(typeof(ForexAlertGetResponse), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.NotFound)]
        public async Task<ActionResult<ForexAlertGetResponse>> GetAsync([FromRoute] ForexAlertGetRequest request)
        {
            var forexAlert = await _forexAlertService.GetAsync(request.Id);

            if (forexAlert == default)
                return NotFound();

            return new ForexAlertGetResponse(forexAlert);
        }

        /// <summary>
        /// Search for Forex Alerts.
        /// </summary>
        /// <param name="request">Search request.</param>
        /// <returns>Response.</returns>
        [HttpGet]
        [ProducesResponseType(typeof(ForexAlertSearchResponse), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.NotFound)]
        public async Task<ActionResult<ForexAlertSearchResponse>> SearchAsync([FromQuery] ForexAlertSearchRequest request)
        {
            IEnumerable<ForexAlert> forexAlerts;

            if (request.Ids.Any())
                forexAlerts = await _forexAlertService.GetAsync(request.Ids);
            else 
                forexAlerts = await _forexAlertService.GetAllAsync();

            if (!forexAlerts.Any())
                return NotFound();

            return new ForexAlertSearchResponse(forexAlerts);
        }

        /// <summary>
        /// Create a new Forex Alert.
        /// </summary>
        /// <param name="request">Post request.</param>
        /// <returns>Response.</returns>
        [HttpPost]
        [ProducesResponseType(typeof(ForexAlertPostResponse), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<ActionResult<ForexAlertPostResponse>> PostAsync([FromBody] ForexAlertPostRequest request)
        {
            var forexAlert = new ForexAlert
            {
                Frequency = request.Frequency,
                FromCurrency = request.FromCurrency,
                ToCurrency = request.ToCurrency,
                MinimumRate = request.MinimumRate,
                ContactMethod = request.ContactMethod
            };

            if (await _forexAlertService.Exists(forexAlert.FromCurrency, forexAlert.ToCurrency))
                return BadRequest($"{forexAlert.FromCurrency} to {forexAlert.ToCurrency} alert already exists.");

            await _forexAlertService.InsertAsync(forexAlert);

            return new ForexAlertPostResponse(forexAlert);
        }

        /// <summary>
        /// Update an existing Forex Alert.
        /// </summary>
        /// <param name="request">Patch request.</param>
        /// <returns>Response.</returns>
        [HttpPatch("{id}")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.NotFound)]
        public async Task<ActionResult> PatchAsync([FromBody] ForexAlertPatchRequest request)
        {
            var existingAlert = await _forexAlertService.GetAsync(request.Id);

            if (existingAlert == default)
                return NotFound();

            existingAlert.Frequency = request.Frequency ?? existingAlert.Frequency;
            existingAlert.FromCurrency = request.FromCurrency ?? existingAlert.FromCurrency;
            existingAlert.ToCurrency = request.ToCurrency ?? existingAlert.ToCurrency;
            existingAlert.MinimumRate = request.MinimumRate ?? existingAlert.MinimumRate;
            existingAlert.ContactMethod = request.ContactMethod ?? existingAlert.ContactMethod;

            await _forexAlertService.UpdateAsync(existingAlert);

            return Ok();
        }

        /// <summary>
        /// Delete an existing Forex Alert.
        /// </summary>
        /// <param name="request">Delete request.</param>
        /// <returns>Response.</returns>
        [HttpDelete("{id}")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.NotFound)]
        public async Task<ActionResult> DeleteAsync([FromRoute] ForexAlertDeleteRequest request)
        {
            var existingAlert = await _forexAlertService.GetAsync(request.Id);

            if (existingAlert == default)
                return NotFound();

            await _forexAlertService.DeleteAsync(existingAlert);

            return Ok();
        }
    }
}
