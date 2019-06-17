using System;
using System.Collections.Generic;
using System.Linq;

namespace luciadominguez.web.domain
{
    public class Photo
    {
        public Guid Id { get; set; }
        public string FileName { get; set; }
        public string Title { get; set; }
        public string Extension { get; set; }
        public int Height { get; set; }
        public int Width { get; set; }
        public decimal Price { get; set; }
        public string Url { get; set; }

        public DateTime CreationDate { get; set; }

        public virtual Album Album { get; set; }
        public virtual List<PhotoTag> PhotoTags { get; set; } = new List<PhotoTag>();
        public virtual List<Comment> Comments { get; set; } = new List<Comment>();

        public List<Tag> GetTags()
        {
            return PhotoTags
                .Where(photoTag => photoTag.Photo.Id == Id)
                .Select(photoTag => photoTag.Tag)
                .ToList();
        }
    }
}
