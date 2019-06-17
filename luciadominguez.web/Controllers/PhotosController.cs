using luciadominguez.web.database;
using luciadominguez.web.domain;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace luciadominguez.web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PhotosController : ControllerBase
    {
        private readonly SQLiteContext _dbContext;
        private readonly IHostingEnvironment _hostingEnvironment;

        public PhotosController(SQLiteContext dbContext, IHostingEnvironment environment)
        {
            _dbContext = dbContext;
            _hostingEnvironment = environment;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Photo>> GetAsync(Guid id)
        {
            // Recoger foto de la base de datos dependiendo de la
            // ID proporcionada.
            Photo result = await _dbContext.Photos
                .Include(x => x.PhotoTags)
                .FirstOrDefaultAsync(photo => photo.Id.Equals(id));

            // Comprobar si hay resultado
            if (result is null)
            {
                return NotFound();
            }

            // Devolver el objeto foto
            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult> PostAsync(Photo model)
        {
            // Comprobar que la foto no exista ya
            if (_dbContext.Photos.Any(photo => photo.Id.Equals(model.Id)))
            {
                return Conflict();
            }

            // Añadir nueva foto a la base de datos
            await _dbContext.Photos.AddAsync(model);
            await _dbContext.SaveChangesAsync();

            // Devolver como respuesta la nueva ruta para poder
            // recoger la foto pasandole la ID
            return CreatedAtRoute("{id}", model.Id);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> PutAsync(Photo model)
        {
            // Comprobar que la foto no exista ya
            if (!_dbContext.Photos.Any(photo => photo.Id.Equals(model.Id)))
            {
                return NotFound();
            }

            _dbContext.Photos.Update(model);
            await _dbContext.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteAsync(Guid id)
        {
            // Recoger foto de la base de datos dependiendo de la
            // ID proporcionada.
            Photo result = await _dbContext.Photos
                .FirstOrDefaultAsync(photo => photo.Id.Equals(id));

            // Comprobar si hay resultado
            if (result is null)
            {
                return NotFound();
            }

            // Eliminar de la base de datos
            _dbContext.Photos.Remove(result);
            await _dbContext.SaveChangesAsync();

            // Todo ha ido bien
            return Ok();
        }

        [HttpPost("add")]
        public async Task<ActionResult> AddMultiple(IFormCollection form)
        {
            string uploads = Path.Combine(_hostingEnvironment.WebRootPath, "assets", "albums", "test");

            foreach (IFormFile file in form.Files)
            {
                if (file.Length == 0)
                {
                    continue;
                }

                string filePath = Path.Combine(uploads, file.FileName);
                using (FileStream fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(fileStream);
                }
            }

            return Ok();
        }
    }
}
