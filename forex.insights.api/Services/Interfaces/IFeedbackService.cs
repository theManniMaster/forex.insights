using forex.insights.api.Entities.Feedbacks;

namespace forex.insights.api.Services.Interfaces
{
    /// <summary>
    /// Interface for feedback service.
    /// </summary>
    public interface IFeedbackService
    {
        /// <summary>
        /// Inserts a new feedback into the database.
        /// </summary>
        /// <param name="feedback">New feedback.</param>
        /// <returns>Task.</returns>
        Task InsertAsync(Feedback feedback);
    }
}
