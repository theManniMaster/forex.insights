using System.ComponentModel.DataAnnotations;

namespace forex.insights.api.DataModels.ForexAlerts
{
    /// <summary>
    /// Forex Alert get request.
    /// </summary>
    public class ForexAlertGetRequest
    {
        /// <summary>
        /// Unique identifier.
        /// </summary>
        [Required]
        public Guid Id { get; set; }
    }
}
