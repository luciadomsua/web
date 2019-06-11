using System;
using System.ComponentModel.DataAnnotations;

namespace luciadominguez.web.domain
{
    public class PhotoTag
    {
        [Key]
        public Guid Id { get; set; }

        public virtual Photo Photo { get; set; }
        public virtual Tag Tag { get; set; }
    }
}
