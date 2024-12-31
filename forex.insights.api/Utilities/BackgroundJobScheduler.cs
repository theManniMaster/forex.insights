using forex.insights.api.Services.Interfaces;
using Hangfire;

namespace forex.insights.api.Utilities
{
    /// <summary>
    /// Schedules a background job.
    /// </summary>
    public class BackgroundJobScheduler
    {
        //private const string _morningJobId = "morning_job";
        //private const string _morningCron = "0 10 * * *";

        //private const string _eveningJobId = "evening_job";
        //private const string _eveningCron = "0 18 * * *";

        /// <summary>
        /// Schedule jobs to run twice a day.
        /// </summary>
        public static void Schedule()
        {
            // Test
            RecurringJob.AddOrUpdate<INotificationDispatcherService>("a_job", service => service.DispatchAsync(), Cron.Minutely());

            //RecurringJob.AddOrUpdate(_morningJobId, () => { }, _morningCron);
            //RecurringJob.AddOrUpdate(_eveningJobId, () => { }, _eveningCron);
        }
    }
}
