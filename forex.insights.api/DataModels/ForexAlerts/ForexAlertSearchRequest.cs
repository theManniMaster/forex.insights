namespace forex.insights.api.DataModels.ForexAlerts
{
    /// <summary>
    /// Forex Alert search request.
    /// </summary>
    public class ForexAlertSearchRequest
    {
        /// <summary>
        /// Forex Alert Ids.
        /// </summary>
        public IEnumerable<Guid> Ids { get; set; } = [];
    }
}
