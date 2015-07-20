using Microsoft.AspNet.Identity.EntityFramework;
using System.Data.Entity;

namespace DailyTrack.Models
{
    public class DailyTrackDbContext : IdentityDbContext<ApplicationUser>
    {
        public DailyTrackDbContext()
            : base("DailyTrackConnection", throwIfV1Schema: false)
        {
        }

        public static DailyTrackDbContext Create()
        {
            return new DailyTrackDbContext();
        }

        public System.Data.Entity.DbSet<DailyTrack.Models.Activity> Activities { get; set; }

    }
}