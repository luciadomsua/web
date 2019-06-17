using System;
using System.Collections.Generic;
using System.Text;

namespace luciadominguez.web.domain
{
    public class Comment
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Author { get; set; }
        public string Text { get; set; }
        public DateTime CreationDate { get; set; }

        public virtual Photo Photo { get; set; }
    }
}
