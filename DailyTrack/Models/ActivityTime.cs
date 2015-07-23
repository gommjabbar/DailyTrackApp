using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace DailyTrack.Models
{
    public class ActivityTime : BaseEntity
    {
        [ForeignKey("Activity")]
        public int ActivityId { get; set; }
        public Activity activity { get; set; }

        public DateTime? StartTime { get; set; }
        public DateTime? EndTime { get; set; }
    }
}