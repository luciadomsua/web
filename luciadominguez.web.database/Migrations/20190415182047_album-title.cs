using Microsoft.EntityFrameworkCore.Migrations;

namespace luciadominguez.web.database.Migrations
{
    public partial class albumtitle : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Albums",
                newName: "Title");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Title",
                table: "Albums",
                newName: "Name");
        }
    }
}
