using System.Text.Json.Serialization;

namespace forex.insights.api.DataModels.ExchangeRates
{
    /// <summary>
    /// Exchange rate api get response.
    /// </summary>
    public class ExchangeRateGetResponse
    {
        /// <summary>
        /// Response result.
        /// </summary>
        public string Result { get; set; } = string.Empty;

        /// <summary>
        /// Exchange currency base.
        /// </summary>
        [JsonPropertyName("base_code")]
        public string Base { get; set; } = string.Empty;

        /// <summary>
        /// Exchange rates.
        /// </summary>
        [JsonPropertyName("conversion_rates")]
        public Dictionary<string, decimal> Rates { get; set; } = new Dictionary<string, decimal>();

        /// <summary>
        /// Error type.
        /// </summary>
        [JsonPropertyName("error-type")]
        public string Error { get; set; } = string.Empty;
    }
}
