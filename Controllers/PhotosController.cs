using luciadominguez.web.database;
using luciadominguez.web.domain;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using System;
using System.Linq;
using System.Threading.Tasks;

namespace luciadominguez.web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PhotosController : ControllerBase
    {
        private readonly SQLiteContext _dbContext;

        public PhotosController(SQLiteContext dbContext)
        {
            _dbContext = dbContext;   
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Photo>> GetAsync(Guid id)
        {
            // Fetch from database
            Photo photo = await _dbContext.Photos
                .Include(x => x.PhotoTags)
                .FirstOrDefaultAsync(x => x.Id.Equals(id));

            // Check if exists
            if (photo is null)
            {
                return NotFound();
            }

            // Return json-encoded photo object
            return Ok(photo);
        }

        [HttpPost]
        public async Task<ActionResult> PostAsync(Photo photo)
        {
            // If album already exists
            if (_dbContext.Photos.Any(x => x.Id.Equals(photo.Id)))
            {
                return Conflict();
            }

            // Add new photo
            await _dbContext.Photos.AddAsync(photo);
            await _dbContext.SaveChangesAsync();

            // Return route to new photo
            return CreatedAtRoute("{id}", photo.Id);
        }
    }
}
