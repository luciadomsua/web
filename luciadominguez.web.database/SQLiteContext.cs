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
                .Property(x => x.Id)
                .HasConversion<string>();

            builder.Entity<Album>()
                .Property(x => x.Id)
                .HasConversion<string>();

            builder.Entity<Tag>()
                .Property(x => x.Id)
                .HasConversion<string>();

            builder.Entity<Comment>()
                .Property(x => x.Id)
                .HasConversion<string>();

            builder.Entity<Photo>()
                .HasOne(photo => photo.Album)
                .WithMany(album => album.Photos);

            builder.Entity<Photo>()
                .HasMany(x => x.Comments)
                .WithOne(x => x.Photo);

            builder.Entity<Album>()
                .HasMany(album => album.Photos)
                .WithOne(photo => photo.Album);

            builder.Entity<Photo>()
                .HasMany(photo => photo.PhotoTags)
                .WithOne(photoTag => photoTag.Photo);

            builder.Entity<Tag>()
                .HasMany(tag => tag.PhotoTags)
                .WithOne(photoTag => photoTag.Tag);

            builder.Entity<Comment>()
                .HasOne(x => x.Photo)
                .WithMany(x => x.Comments);
        }
    }
}
