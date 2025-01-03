using forex.insights.api.DataModels.Feedbacks;
using forex.insights.api.Entities.Feedbacks;
using forex.insights.api.Services.Interfaces;
using forex.insights.api.Utilities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace forex.insights.api.Controllers
{
    /// <summary>
    /// Feedback API Endpoint.
    /// </summary>
    /// <param name="feedbackService">Feedback service</param>
    [Route("api/[controller]")]
    [Authorize]
    public class FeedbackController(IFeedbackService feedbackService) : BaseApiController
    {
        /// <summary>
        /// Post Feedback.
        /// </summary>
        /// <param name="request">Post request.</param>
        /// <returns>Response.</returns>
        [HttpPost]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.Unauthorized)]
        public async Task<ActionResult> PostAsync([FromBody] FeedbackPostRequest request)
        {
            var userId = GetUserId();

            if (!userId.HasValue)
                return Unauthorized();

            var feedback = new Feedback
            {
                UserId = userId.Value,
                FirstName = request.FirstName,
                LastName = request.LastName,
                Text = request.Feedback
            };

            await feedbackService.InsertAsync(feedback);

            return Ok();
        }
    }
}
