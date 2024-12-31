using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace forex.insights.api.Migrations
{
    /// <inheritdoc />
    public partial class Added_Active_Status_And_Sent_Time_To_Alerts : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "NextAlertTime",
                table: "ForexAlerts",
                newName: "LastSentTime");

            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "ForexAlerts",
                type: "bit",
                nullable: false,
                defaultValue: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "ForexAlerts");

            migrationBuilder.RenameColumn(
                name: "LastSentTime",
                table: "ForexAlerts",
                newName: "NextAlertTime");
        }
    }
}
