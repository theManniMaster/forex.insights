using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace forex.insights.api.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ForexAlerts",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Frequency = table.Column<int>(type: "int", nullable: false),
                    FromCurrency = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: false),
                    ToCurrency = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: false),
                    MinimumRate = table.Column<decimal>(type: "decimal(9,2)", precision: 9, scale: 2, nullable: false),
                    ContactMethod = table.Column<int>(type: "int", nullable: false),
                    NextAlertTime = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ForexAlerts", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ForexAlerts");
        }
    }
}
