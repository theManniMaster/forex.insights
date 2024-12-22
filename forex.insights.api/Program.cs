using forex.insights.api.Data;
using forex.insights.api.Filters;
using forex.insights.api.Services;
using forex.insights.api.Services.Interfaces;
using forex.insights.api.Templates;
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

            // Add DbContext.
            services.AddDbContext<ForexAlertDbContext>(options => 
                options.UseSqlServer(builder.Configuration.GetConnectionString("ForexAlertDbConnectionString"))
                );

            // Add Controllers with exception filters.
            services.AddControllers(options => options.Filters.Add<GlobalExceptionFilter>());

            // Add Services.
            services.AddScoped<IForexAlertService, ForexAlertService>();
            services.AddKeyedScoped<INotificationService, EmailService>(TemplateType.Email);

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

            var app = builder.Build();

            app.UseCors(corsPolicyName);

            // Configure the HTTP request pipeline.
            app.UseHttpsRedirection();

            app.MapControllers();

            if (app.Environment.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.Run();
        }
    }
}
