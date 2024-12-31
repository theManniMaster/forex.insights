using forex.insights.api.Entities.ForexAlerts;

namespace forex.insights.api.DataModels.ForexAlerts
{
    /// <summary>
    /// Forex Alert search response.
    /// </summary>
    public class ForexAlertSearchResponse(IEnumerable<ForexAlert> forexAlerts)
    {
        /// <summary>
        /// Requested Forex Alerts.
        /// </summary>
        public IEnumerable<ForexAlertGetResponse> ForexAlerts { get; set; } =
            forexAlerts.Select(forexAlert => new ForexAlertGetResponse(forexAlert));
    }
}
