using forex.insights.api.Entities.ForexAlerts.Enums;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace forex.insights.api.DataModels.ForexAlerts
{
    /// <summary>
    /// Forex Alert post request.
    /// </summary>
    public class ForexAlertPostRequest
    {
        /// <summary>
        /// Notification frequency.
        /// </summary>
        [Required]
        public NotificationFrequency Frequency { get; set; }

        /// <summary>
        /// Currency to convert from.
        /// </summary>
        [Required]
        [MaxLength(5)]
        public string FromCurrency { get; set; } = string.Empty;

        /// <summary>
        /// Currency to convert to.
        /// </summary>
        [Required]
        [MaxLength(5)]
        public string ToCurrency { get; set; } = string.Empty;

        /// <summary>
        /// Minimum rate for alert.
        /// </summary>
        [Required]
        [Precision(9, 2)]
        public decimal MinimumRate { get; set; }

        /// <summary>
        /// Contact method.
        /// </summary>
        [Required]
        public ContactMethod ContactMethod { get; set; }
    }
}
