using forex.insights.api.Services.Interfaces;
using Hangfire;

namespace forex.insights.api.Utilities.BackgroundJobs
{
    /// <summary>
    /// Schedules a background job.
    /// </summary>
    public class BackgroundJobScheduler
    {
        private const string _eveningJobId = "evening_job";
        private const string _eveningCron = "5 0 * * *";

        private const string _alertCleanupJobId = "alert_cleanup_job";
        private const string _alertCleanupCron = "0 0 * * *";

        /// <summary>
        /// Schedule jobs to run twice a day.
        /// </summary>
        public static void Schedule()
        {
            // Exchange Rate API updates data at 7pm (toronto time, midnight utc) everyday. 
            // This job will run at 7:05 pm (12:05 am utc). 
            RecurringJob.AddOrUpdate<INotificationDispatcherService>(
                _eveningJobId,
                service => service.DispatchAsync(),
                _eveningCron
            );

            RecurringJob.AddOrUpdate<IAlertCleanupService>(
                _alertCleanupJobId,
                service => service.CleanupAlertsAsync(),
                _alertCleanupCron
            );
        }
    }
}
