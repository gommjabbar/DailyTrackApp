namespace DailyTrack.Migrations
{
    using DailyTrack.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<DailyTrack.Models.DailyTrackDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            ContextKey = "DailyTrack.Models.DailyTrackDbContext";
        }

        protected override void Seed(DailyTrack.Models.DailyTrackDbContext context)
        {
            // TODO add default inbox folder
            //if (context.Activities.Any())
            //{
            //    context.Activities.Add(new Activity());
            //}
        }
    }
}
