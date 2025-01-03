using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace forex.insights.api.Entities.Feedbacks
{
    /// <summary>
    /// Feedback entity.
    /// </summary>
    public class Feedback
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
        public string Text { get; set; } = string.Empty;
    }
}
