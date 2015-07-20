using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DailyTrack.Models
{
    public class BaseEntity 
    {
        public DateTime CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }
    }
}