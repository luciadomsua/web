using Microsoft.AspNetCore.Mvc;

namespace luciadominguez.web
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : ControllerBase
    {
        [HttpGet("index")]
        public IActionResult Index()
        {
            return File("~/index.html", "text/html");
        }
    }
}