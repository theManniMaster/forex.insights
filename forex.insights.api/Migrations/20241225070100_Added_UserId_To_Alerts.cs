﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace forex.insights.api.Migrations
{
    /// <inheritdoc />
    public partial class Added_UserId_To_Alerts : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "UserId",
                table: "ForexAlerts",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserId",
                table: "ForexAlerts");
        }
    }
}
