using System;
using System.Collections.Generic;
using System.Linq;

namespace luciadominguez.web.domain
{
    public class Tag
    {
        public Guid Id { get; set; }
        public string Name { get; set; }

        public DateTime CreationDate { get; set; }
        public virtual List<PhotoTag> PhotoTags { get; set; }

        public List<Photo> GetPhotos()
        {
            return PhotoTags
                .Where(photoTag => photoTag.Tag.Id == Id)
                .Select(photoTag => photoTag.Photo)
                .ToList();
        }
    }
}
