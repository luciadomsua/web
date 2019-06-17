using System;
using System.Collections.Generic;

namespace luciadominguez.web.domain
{
    public class Album
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Title { get; set; }
        public string Description { get; set; }
        public string Url { get; set; }

        public DateTime CreationDate { get; set; } = DateTime.Now;

        public virtual Photo Cover { get; set; }
        public virtual List<Photo> Photos { get; set; } = new List<Photo>();
    }
}
