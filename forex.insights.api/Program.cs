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

            var app = builder.Build();

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
