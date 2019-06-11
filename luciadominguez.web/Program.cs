using luciadominguez.web.database;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;

namespace luciadominguez.web
{
    public class Program
    {
        public static void Main(string[] args)
        {
            SQLiteContext context = new SQLiteContext();
            context.Database.EnsureCreated();

            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseKestrel(options =>
                {
                    options.ListenAnyIP(80);
                })
                .UseStartup<Startup>();
    }
}
