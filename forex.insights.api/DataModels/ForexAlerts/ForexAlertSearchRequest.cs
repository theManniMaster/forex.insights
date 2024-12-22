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
        public IEnumerable<Guid> Ids { get; set; } = new List<Guid>();

        /*
         * Developer Note:
         * 
         * Dont assign [] to Ids as the compiler is suggesting.
         * .NET had issues with binding to Ids, even if the correct url is provided.
         * 
         * This is because assigning [] to a variable means assigning Array.Empty<Guid>() to it.
         * Since arrays are immutable, the Ids property will always be an empty array,
         * as .NET will not be able to add values to it.
         */
    }
}
