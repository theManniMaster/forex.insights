using forex.insights.api.Entities.ForexAlerts.Enums;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace forex.insights.api.Entities.ForexAlerts
{
    /// <summary>
    /// Forex Alert entity.
    /// </summary>
    public class ForexAlert
    {
        /// <summary>
        /// Unique identifier.
        /// </summary>
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        /// <summary>
        /// User identifier.
        /// </summary>
        [Required]
        public Guid UserId { get; set; }

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

        /// <summary>
        /// If Alert is active.
        /// </summary>
        public bool IsActive { get; set; } = true;
    }
}
