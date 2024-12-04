using forex.insights.api.Entities.ForexAlerts.Enums;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;

namespace forex.insights.api.DataModels.ForexAlerts
{
    /// <summary>
    /// Forex Alert patch request.
    /// </summary>
    public class ForexAlertPatchRequest
    {
        /// <summary>
        /// Unique identifier.
        /// </summary>
        [Required]
        [FromRoute]
        public Guid Id { get; set; }

        /// <summary>
        /// Notification frequency.
        /// </summary>
        public NotificationFrequency? Frequency { get; set; }

        /// <summary>
        /// Currency to convert from.
        /// </summary>
        [MaxLength(5)]
        public string? FromCurrency { get; set; }

        /// <summary>
        /// Currency to convert to.
        /// </summary>
        [MaxLength(5)]
        public string? ToCurrency { get; set; }

        /// <summary>
        /// Minimum rate for alert.
        /// </summary>
        [Precision(9, 2)]
        public decimal? MinimumRate { get; set; }

        /// <summary>
        /// Contact method.
        /// </summary>
        public ContactMethod? ContactMethod { get; set; }
    }
}
