using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using luciadominguez.web.database;
using luciadominguez.web.domain;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace luciadominguez.web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TagsController : ControllerBase
    {
        private readonly SQLiteContext _dbContext;

        public TagsController(SQLiteContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetAsync(Guid id)
        {
            // Recoger de la base de datos
            Tag tag = await _dbContext.Tags
                .FirstOrDefaultAsync(dbTag => dbTag.Id.Equals(id));

            if (tag is null)
            {
                return NotFound();
            }

            // Todo ha ido bien
            return Ok(tag);
        }

        [HttpPost]
        public async Task<ActionResult> PostAsync(Tag tag)
        {
            // Comprobar que la etiqueta a crear no exista ya
            if (_dbContext.Tags.Any(dbTag => dbTag.Id.Equals(tag.Id)))
            {
                return Conflict();
            }

            // Añadir etiqueta a la base de datos y guardar cambios
            await _dbContext.Tags.AddAsync(tag);
            await _dbContext.SaveChangesAsync();

            // Todo ha ido bien
            return Created("{id}", tag.Id);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> PutAsync(Guid id, Tag tag)
        {
            // Comprobar que la etiqueta exista
            if (!_dbContext.Tags.Any(dbTag => dbTag.Id.Equals(tag.Id)))
            {
                return NotFound();
            }

            // Actualizar la información de la etiqueta en la
            // base de datos
            _dbContext.Tags.Update(tag);
            await _dbContext.SaveChangesAsync();

            // Todo ha ido bien
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteAsync(Guid id)
        {
            // Recoger de la base de datos
            Tag tag = await _dbContext.Tags
                .FirstOrDefaultAsync(dbTag => dbTag.Id.Equals(id));

            if (tag is null)
            {
                return NotFound();
            }

            // Borrar de la base de datos
            _dbContext.Tags.Remove(tag);
            await _dbContext.SaveChangesAsync();

            // Todo ha ido bien
            return Ok();
        }
    }
}