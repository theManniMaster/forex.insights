using forex.insights.api.Entities.ForexAlerts;
using forex.insights.api.Entities.ForexAlerts.Enums;

namespace forex.insights.api.DataModels.ForexAlerts
{
    /// <summary>
    /// Forex Alert get response.
    /// </summary>
    public class ForexAlertGetResponse(ForexAlert forexAlert)
    {
        /// <summary>
        /// Unique identifier.
        /// </summary>
        public Guid Id { get; set; } = forexAlert.Id;

        /// <summary>
        /// Notification frequency.
        /// </summary>
        public NotificationFrequency Frequency { get; set; } = forexAlert.Frequency;

        /// <summary>
        /// Currency to convert from.
        /// </summary>
        public string FromCurrency { get; set; } = forexAlert.FromCurrency;

        /// <summary>
        /// Currency to convert to.
        /// </summary>
        public string ToCurrency { get; set; } = forexAlert.ToCurrency;

        /// <summary>
        /// Minimum rate for alert.
        /// </summary>
        public decimal MinimumRate { get; set; } = forexAlert.MinimumRate;

        /// <summary>
        /// Contact method.
        /// </summary>
        public ContactMethod ContactMethod { get; set; } = forexAlert.ContactMethod;

        /// <summary>
        /// If Alert is active.
        /// </summary>
        public bool IsActive { get; set; } = forexAlert.IsActive;
    }
}
