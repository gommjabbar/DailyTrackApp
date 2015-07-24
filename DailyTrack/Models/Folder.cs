using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DailyTrack.Models
{
    public class Folder : BaseEntity
    {
        public Folder()
        {
            Activities = new List<Activity>();
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual ICollection<Activity> Activities { get; set; }
    }
}