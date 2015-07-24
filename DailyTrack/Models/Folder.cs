using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DailyTrack.Models
{
    public class Folder : BaseEntity
    {
        private string name;

        public Folder(string name)
        {
            Activities = new List<Activity>();
            this.name = name;
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public virtual ICollection<Activity> Activities { get; set; }
    }
}