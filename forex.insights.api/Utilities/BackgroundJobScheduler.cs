using forex.insights.api.Services.Interfaces;
using Hangfire;

namespace forex.insights.api.Utilities
{
    /// <summary>
    /// Schedules a background job.
    /// </summary>
    public class BackgroundJobScheduler
    {
        private const string _eveningJobId = "evening_job";
        private const string _eveningCron = "5 19 * * *";

        /// <summary>
        /// Schedule jobs to run twice a day.
        /// </summary>
        public static void Schedule()
        {
            //// The API i'm using updates data at 7pm (toronto time) everyday. This job will run at 7:05 pm. 
            //RecurringJob.AddOrUpdate<INotificationDispatcherService>(
            //    _eveningJobId, 
            //    services => services.DispatchAsync(),
            //    _eveningCron 
            //);
        }
    }
}
