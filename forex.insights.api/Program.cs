using forex.insights.api.Data;
using forex.insights.api.Filters;
using forex.insights.api.Services;
using forex.insights.api.Services.Interfaces;
using forex.insights.api.Utilities;
using Hangfire;
using Microsoft.AspNetCore.Identity;
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
            var connectionString = builder.Configuration.GetConnectionString("ForexAlertDbConnectionString");

            // Add DbContext.
            services.AddDbContext<ForexAlertDbContext>(options =>
                options.UseSqlServer(connectionString)
            );
            services.AddDbContext<UserIdentityDbContext>(options =>
                options.UseSqlServer(connectionString)
            );

            // Add hangfire
            services.AddHangfire(config =>
            {
                config.UseSqlServerStorage(connectionString);
                config.UseRecommendedSerializerSettings();
                config.UseSimpleAssemblyNameTypeSerializer();
            });
            services.AddHangfireServer();

            // Add Controllers with exception filters.
            services.AddControllers(options => options.Filters.Add<GlobalExceptionFilter>());

            // Add Services.
            services.AddScoped<IForexAlertService, ForexAlertService>();

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

            services.AddIdentityApiEndpoints<IdentityUser>()
                .AddEntityFrameworkStores<UserIdentityDbContext>();

            services.AddAuthentication();
            services.AddAuthorization();

            var app = builder.Build();

            app.UseHangfireDashboard();

            app.MapIdentityApi<IdentityUser>();

            app.UseCors(corsPolicyName);

            app.UseAuthentication();
            app.UseAuthorization();

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
