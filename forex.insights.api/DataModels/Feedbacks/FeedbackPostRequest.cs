using System.ComponentModel.DataAnnotations;

namespace forex.insights.api.DataModels.Feedbacks
{
    /// <summary>
    /// Feedback post request.
    /// </summary>
    public class FeedbackPostRequest
    {
        /// <summary>
        /// First name.
        /// </summary>
        [Required]
        [MaxLength(20)]
        public string FirstName { get; set; } = string.Empty;

        /// <summary>
        /// Last name.
        /// </summary>
        [Required]
        [MaxLength(20)]
        public string LastName { get; set; } = string.Empty;

        /// <summary>
        /// Feedback.
        /// </summary>
        [Required]
        [MaxLength(250)]
        public string Feedback { get; set; } = string.Empty;
    }
}
