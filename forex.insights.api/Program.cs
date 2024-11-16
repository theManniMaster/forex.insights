using forex.insights.api.Data;
using Microsoft.EntityFrameworkCore;

namespace forex.insights.api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddAuthorization();

            builder.Services.AddDbContext<ForexAlertDbContext>(options => 
                options.UseSqlServer(builder.Configuration.GetConnectionString("ForexAlertDbConnectionString"))
                );


            var app = builder.Build();

            // Configure the HTTP request pipeline.

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.Run();
        }
    }
}
