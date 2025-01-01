namespace forex.insights.api.Services.Interfaces
{
    /// <summary>
    /// Service for exchange rate information.
    /// </summary>
    public interface IExchangeRateService
    {
        /// <summary>
        /// Get exchange rate for a given currency.
        /// </summary>
        /// <param name="baseCurrency">Base currency.</param>
        /// <param name="targetCurrency">Target currency.</param>
        /// <returns>Exchange rate.</returns>
        Task<decimal> GetExchangeRateAsync(string baseCurrency, string targetCurrency);
    }
}
