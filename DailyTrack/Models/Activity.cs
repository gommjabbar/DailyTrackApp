using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DailyTrack.Models
{
    public class Activity : BaseEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime? StartTime { get; set; }
        public DateTime? EndTime { get; set; }
        public bool Completed { get; set; }
        public DateTime? CompletedAt { get; set; }
    }
}