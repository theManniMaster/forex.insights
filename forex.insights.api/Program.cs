using forex.insights.api.Data;
using forex.insights.api.Filters;
using forex.insights.api.Services;
using forex.insights.api.Services.Interfaces;
using forex.insights.api.Utilities.BackgroundJobs;
using Hangfire;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.EntityFrameworkCore;

namespace forex.insights.api
{
    public class Program
    {
        private const string corsPolicyName = "corsPolicy";

        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            var services = builder.Services;
            var connectionString = builder.Configuration["ForexAlertDbConnectionString"];

            // Add DbContext.
            services.AddDbContext<ForexAlertDbContext>(options =>
                options.UseSqlServer(connectionString)
            );
            services.AddDbContext<UserIdentityDbContext>(options =>
                options.UseSqlServer(connectionString)
            );

            // Add hangfire
            services.AddHangfire(config => config
                .UseSqlServerStorage(connectionString)
                .UseRecommendedSerializerSettings()
                .UseSimpleAssemblyNameTypeSerializer()
                .UseActivator<JobActivator>(new BackgroundJobActivator(services))
            );
            services.AddHangfireServer();

            // Add Controllers with exception filters.
            services.AddControllers(options => options.Filters.Add<GlobalExceptionFilter>());

            // Add Services.
            services.AddScoped<IForexAlertService, ForexAlertService>();
            services.AddScoped<INotificationDispatcherService, NotificationDispatcherService>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IExchangeRateService, ExchangeRateService>();
            services.AddScoped<IHangfireService, HangfireService>();
            services.AddScoped<IFeedbackService, FeedbackService>();
            services.AddScoped<IAlertCleanupService, AlertCleanupService>();
            services.AddTransient<IEmailSender, IdentityEmailSenderService>(); 

            // Add Cors.
            var allowedOrigin = (builder.Configuration["AllowedFrontendOrigin"] ?? "").ToLower();

            services.AddCors(options =>
            {
                options.AddPolicy(corsPolicyName, policy =>
                {
                    policy.WithOrigins(allowedOrigin)
                        .SetIsOriginAllowed(origin => origin.ToLower().Equals(allowedOrigin))
                        .AllowAnyHeader()
                        .AllowAnyMethod();
                });
            });

            services.AddIdentityApiEndpoints<IdentityUser>(options =>
            {
                options.SignIn.RequireConfirmedEmail = true;
            })
                .AddEntityFrameworkStores<UserIdentityDbContext>()
                .AddDefaultTokenProviders();

            services.AddAuthentication();
            services.AddAuthorization();

            var app = builder.Build();

            app.MapIdentityApi<IdentityUser>();

            app.UseCors(corsPolicyName);

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseHangfireDashboard("/hangfire", new DashboardOptions
            {
                Authorization = [new HangfireAuthorizationFilter(builder.Configuration["AdminEmail"])],
                AppPath = null,
            });

            // Configure the HTTP request pipeline.
            app.UseHttpsRedirection();

            app.MapControllers();

            if (app.Environment.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            BackgroundJobScheduler.Schedule();

            app.Run();
        }
    }
}
