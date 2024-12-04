using System.ComponentModel.DataAnnotations;

namespace forex.insights.api.DataModels.ForexAlerts
{
    /// <summary>
    /// Forex Alert delete request.
    /// </summary>
    public class ForexAlertDeleteRequest
    {
        /// <summary>
        /// Unique identifier.
        /// </summary>
        [Required]
        public Guid Id { get; set; }
    }
}
