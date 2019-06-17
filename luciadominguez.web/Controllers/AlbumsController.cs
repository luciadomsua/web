using luciadominguez.web.database;
using luciadominguez.web.domain;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace luciadominguez.web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AlbumsController : ControllerBase
    {
        private readonly SQLiteContext _dbContext;
        private readonly IHostingEnvironment _hostingEnvironment;
        private readonly string _localAlbumDirectory;
        private readonly string _serverAlbumDirectory;

        public AlbumsController(SQLiteContext dbContext, IHostingEnvironment environment)
        {
            _dbContext = dbContext;
            _hostingEnvironment = environment;
            _serverAlbumDirectory = Path.Combine("assets", "albums");
            _localAlbumDirectory = Path.Combine(_hostingEnvironment.WebRootPath, _serverAlbumDirectory);
        }

        [HttpGet]
        public async Task<ActionResult<List<Album>>> GetAllAsync()
        {
            List<Album> albums = await _dbContext.Albums
                .Take(10)
                .Include(x => x.Photos)
                .ToListAsync();

            return Ok(albums);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Album>> GetAsync(Guid id)
        {
            // Recoger de la base de datos si existe
            Album album = await _dbContext.Albums
                .Include(x => x.Photos)
                .FirstOrDefaultAsync(x => x.Id.Equals(id));

            // Comprobar si existe
            if (album is null)
            {
                return NotFound();
            }

            // Devolver el objeto album
            return Ok(album);
        }

        [HttpPost]
        public async Task<IActionResult> PostAsync(Album album)
        {
            // Comprobar si el album ya existe
            if (_dbContext.Albums.Any(x => x.Id.Equals(album.Id)))
            {
                return Conflict();
            }

            // Añadir el album nuevo
            await _dbContext.Albums.AddAsync(album);
            await _dbContext.SaveChangesAsync();

            // Return route to new album
            return CreatedAtRoute("{id}", album.Id);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> PutAsync(Album model)
        {
            // Comprobar si el album existe
            if (!_dbContext.Albums.Any(x => x.Id.Equals(model.Id)))
            {
                return NotFound();
            }

            // Actualizar album existente en la base de datos
            _dbContext.Albums.Update(model);
            await _dbContext.SaveChangesAsync();

            // Todo ha ido bien
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteAsync(Guid id)
        {
            // Recoger album de la base de datos dependiendo de la
            // ID proporcionada.
            Album result = await _dbContext.Albums
                .FirstOrDefaultAsync(album => album.Id.Equals(id));

            // Comprobar si hay resultado
            if (result is null)
            {
                return NotFound();
            }

            // Eliminar de la base de datos
            _dbContext.Albums.Remove(result);
            await _dbContext.SaveChangesAsync();

            // Todo ha ido bien
            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> AddPhotosAsync(Guid id, List<Photo> photoList)
        {
            // Recoger album de la base de datos dependiendo de la
            // ID proporcionada.
            Album result = await _dbContext.Albums
                .FirstOrDefaultAsync(album => album.Id.Equals(id));

            // Comprobar si hay resultado
            if (result is null)
            {
                return NotFound();
            }

            // Añadir las nuevas fotos al album
            result.Photos.AddRange(photoList);

            // Actualizar album existente en la base de datos
            _dbContext.Albums.Update(result);
            await _dbContext.SaveChangesAsync();

            // Todo ha ido bien
            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> RemovePhotosAsync(Guid id, List<Photo> photoList)
        {
            // Recoger album de la base de datos dependiendo de la
            // ID proporcionada.
            Album album = await _dbContext.Albums
                .FirstOrDefaultAsync(dbAlbum => dbAlbum.Id.Equals(id));

            // Comprobar si hay resultado
            if (album is null)
            {
                return NotFound();
            }

            // Recorrer listado de fotos
            foreach (Photo photo in photoList)
            {
                // Si el album contiene la foto actual
                if (album.Photos.Any(albumPhoto => albumPhoto.Id.Equals(photo.Id)))
                {
                    // Quitar la foto del album
                    album.Photos.Remove(photo);
                }
            }

            // Actualizar album existente en la base de datos
            _dbContext.Albums.Update(album);
            await _dbContext.SaveChangesAsync();

            // Todo ha ido bien
            return Ok();
        }

        [HttpPost("add")]
        public async Task<ActionResult> AddAlbumAsync(IFormCollection form)
        {
            string albumTitle = form["albumTitle"];
            string albumDescription = form["albumDescription"];

            string uploads = Path.Combine(_localAlbumDirectory, albumTitle);

            Album album = new Album
            {
                CreationDate = DateTime.UtcNow,
                Title = albumTitle,
                Description = albumDescription,
                Url = Path.Combine(_serverAlbumDirectory, albumTitle),
                Photos = new List<Photo>()
            };

            Directory.CreateDirectory(uploads);

            foreach (IFormFile file in form.Files)
            {
                if (file.Length == 0)
                {
                    continue;
                }

                string filePath = Path.Combine(uploads, file.FileName);

                Photo photo = new Photo()
                {
                    Album = album,
                    CreationDate = DateTime.UtcNow,
                    FileName = file.FileName,
                    Url = Path.Combine(album.Url, file.FileName)
                };

                album.Photos.Add(photo);

                using (FileStream fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(fileStream);
                }
            }

            await _dbContext.Albums.AddAsync(album);
            await _dbContext.SaveChangesAsync();

            return Ok();
        }
    }
}
