using luciadominguez.web.domain;

using Microsoft.EntityFrameworkCore;

namespace luciadominguez.web.database
{
    /// <summary>
    /// Conector de la base de datos de SQLite
    /// </summary>
    public class SQLiteContext : DbContext
    {
        public DbSet<Photo> Photos { get; set; }
        public DbSet<Album> Albums { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<PhotoTag> PhotoTags { get; set; }

        public SQLiteContext()
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder builder)
        {
            builder.UseSqlite(connectionString: "Data source=.\\luciadominguez.db");
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Photo>()
                .HasOne(photo => photo.Album)
                .WithMany(album => album.Photos);

            builder.Entity<Album>()
                .HasMany(album => album.Photos)
                .WithOne(photo => photo.Album);

            builder.Entity<Photo>()
                .HasMany(photo => photo.PhotoTags)
                .WithOne(photoTag => photoTag.Photo);

            builder.Entity<Tag>()
                .HasMany(tag => tag.PhotoTags)
                .WithOne(photoTag => photoTag.Tag);
        }
    }
}
