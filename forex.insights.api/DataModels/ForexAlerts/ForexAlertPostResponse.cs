using forex.insights.api.Entities.ForexAlerts;

namespace forex.insights.api.DataModels.ForexAlerts
{
    /// <summary>
    /// Forex Alert post response.
    /// </summary>
    public class ForexAlertPostResponse(ForexAlert forexAlert)
    {
        /// <summary>
        /// Unique identifier.
        /// </summary>
        public Guid Id { get; set; } = forexAlert.Id;

        /// <summary>
        /// Next alert time.
        /// </summary>
        public DateTime? NextAlertTime { get; set; } = forexAlert.NextAlertTime;
    }
}
