using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Data.Entity;
using System.Linq;

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
        public System.Data.Entity.DbSet<DailyTrack.Models.Folder> Folders { get; set; }
        //public System.Data.Entity.DbSet<DailyTrack.Models.ActivityTime> ActivitieTimes { get; set; }

        public override int SaveChanges()
        {
            DateTime saveTime = DateTime.Now;

            foreach (var entry in this.ChangeTracker.Entries().Where(e => (e.State == EntityState.Added || e.State == EntityState.Modified)))
            {
                switch (entry.State)
                {
                    case EntityState.Added:
                        entry.Property("CreateDate").CurrentValue = saveTime;
                        break;
                    case EntityState.Modified:
                        entry.Property("UpdateDate").CurrentValue = saveTime;
                        break;
                }
            }

            return base.SaveChanges();

        }

    }
}