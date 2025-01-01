using forex.insights.api.DataModels.ExchangeRates;
using forex.insights.api.Services.Interfaces;

namespace forex.insights.api.Services
{
    /// <summary>
    /// Implementation of ExchangeRateService.
    /// </summary>
    /// <param name="configuration">Configuration.</param>
    /// <param name="logger">Logger.</param>
    public class ExchangeRateService(IConfiguration configuration, ILogger<IExchangeRateService> logger) : IExchangeRateService
    {
        private const string _baseUrl = "https://v6.exchangerate-api.com/v6";
        private const string _endpoint = "latest";

        private readonly Dictionary<string, Dictionary<string, decimal>> cachedExchangeRates = [];

        /// <inheritdoc />
        public async Task<decimal> GetExchangeRateAsync(string baseCurrency, string targetCurrency)
        {
            if (cachedExchangeRates.TryGetValue(baseCurrency, out var rates))
            {
                return rates.GetValueOrDefault(targetCurrency, 0);
            }

            return await LoadExchangeRateAsync(baseCurrency, targetCurrency);
        }

        /// <summary>
        /// Load exchange rate from api.
        /// </summary>
        /// <param name="baseCurrency">Base currency.</param>
        /// <param name="targetCurrency">Target currency.</param>
        /// <returns>Current conversion rate.</returns>
        private async Task<decimal> LoadExchangeRateAsync(string baseCurrency, string targetCurrency)
        {
            var apiKey = configuration["ExchangeRateApiKey"];

            if (string.IsNullOrWhiteSpace(apiKey))
            {
                logger.LogError("Exchange rate api key is missing.");
                return 0;
            }

            using var client = new HttpClient();

            var result = await client.GetFromJsonAsync<ExchangeRateGetResponse>(new Uri($"{_baseUrl}/{apiKey}/{_endpoint}/{baseCurrency}"));

            if (result == default)
            {
                logger.Equals("Failed to get exchange rate.");
                return 0;
            }

            return ParseResponse(result, targetCurrency);
        }

        /// <summary>
        /// Parse response and return exchange rate.
        /// </summary>
        /// <param name="response">Response.</param>
        /// <param name="targetCurrency">Target currency.</param>
        /// <returns>Conversion rate.</returns>
        private decimal ParseResponse(ExchangeRateGetResponse response, string targetCurrency)
        {
            if (response.Result == "success")
            {
                cachedExchangeRates.Add(response.Base, response.Rates);
                return response.Rates.GetValueOrDefault(targetCurrency, 0);
            }
            else
            {
                logger.LogError($"Failed to get exchange rate. Error: {response.Error}");
                return 0;
            }
        }
    }
}
