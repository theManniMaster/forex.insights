using forex.insights.api.Data;
using forex.insights.api.Entities.Feedbacks;
using forex.insights.api.Services.Interfaces;

namespace forex.insights.api.Services
{
    /// <summary>
    /// Implementation of FeedbackService.
    /// </summary>
    /// <param name="dbContext">Database context.</param>
    public class FeedbackService(ForexAlertDbContext dbContext) : IFeedbackService
    {
        /// <inheritdoc/>
        public async Task InsertAsync(Feedback feedback)
        {
            await dbContext.Feedbacks.AddAsync(feedback);
            await dbContext.SaveChangesAsync();
        }
    }
}
