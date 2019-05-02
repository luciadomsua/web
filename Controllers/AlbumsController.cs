using luciadominguez.web.database;
using luciadominguez.web.domain;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using System;
using System.Linq;
using System.Threading.Tasks;

namespace luciadominguez.web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AlbumsController : ControllerBase
    {
        private readonly SQLiteContext _dbContext;

        public AlbumsController(SQLiteContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Album>> Get(Guid id)
        {
            // Fetch from database
            Album album = await _dbContext.Albums
                .Include(x => x.Photos)
                .FirstOrDefaultAsync(x => x.Id.Equals(id));

            // Check if exists
            if (album is null)
            {
                return NotFound();
            }

            // Return json-encoded album object
            return Ok(album);
        }

        [HttpPost]
        public async Task<IActionResult> PostAsync(Album album)
        {
            // If album already exists
            if (_dbContext.Albums.Any(x => x.Id.Equals(album.Id)))
            {
                return Conflict();
            }

            // Add new album
            await _dbContext.Albums.AddAsync(album);
            await _dbContext.SaveChangesAsync();

            // Return route to new album
            return CreatedAtRoute("{id}", album.Id);
        }
    }
}
