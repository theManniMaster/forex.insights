namespace forex.insights.api.Services.Interfaces
{
    /// <summary>
    /// Interface for HangfireService.
    /// </summary>
    public interface IHangfireService
    {
        /// <summary>
        /// Get the login page for Hangfire.
        /// </summary>
        /// <param name="endpoint">Endpoint to submit the login request.</param>
        /// <returns>Login page HTML.</returns>
        string GetLoginPage(string endpoint);
    }
}
