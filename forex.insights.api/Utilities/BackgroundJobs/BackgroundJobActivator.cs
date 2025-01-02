using Hangfire;

namespace forex.insights.api.Utilities.BackgroundJobs
{
    /// <summary>
    /// Activator for background jobs - used by Hangfire server.
    /// </summary>
    /// <param name="serviceCollection">Service collection</param>
    public class BackgroundJobActivator(IServiceCollection serviceCollection) : JobActivator
    {
        private readonly IServiceProvider serviceProvider = serviceCollection.BuildServiceProvider();

        /// <inheritdoc />
        public override object? ActivateJob(Type jobType)
        {
            return serviceProvider.GetService(jobType);
        }
    }
}