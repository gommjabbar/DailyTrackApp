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

        }
    

        public int Id { get; set; }
        public string Name { get; set; }
    }
}