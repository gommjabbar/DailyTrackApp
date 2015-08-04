using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using DailyTrack.Models;


namespace DailyTrack.Repos
{
    public class ActivityRepository : IDisposable, DailyTrack.Repos.IActivityRepository
    {
        private DailyTrackDbContext context;

        public ActivityRepository(DailyTrackDbContext context)
        {
            this.context = context;
        }


        public IEnumerable<Activity> GetActivities()
        {
            return context.Activities.ToList();
        }

        //public IEnumerable<ActivityTime> GetActivityTimes()
      //  {
        //    var activity = context.Activities.Find(id);
         //   return context.Activities.ToList();

       // }

        public Activity GetActivityById(int? id)
        {
            return context.Activities.Find(id);
        }


        public void InsertActivity(Activity activity)
        {
            if (activity.FolderId == 0)
                activity.FolderId = context.Folders.First().Id;
            context.Activities.Add(activity);
        }

        public void DeleteActivity(int? id)
        {
            Activity activity = context.Activities.Find(id);
            context.Activities.Remove(activity);
        }


        public void UpdateActivity(Activity activity)
        {
            context.Entry(activity).State = System.Data.Entity.EntityState.Modified;

        }

        public Activity CompleteActivity(int id)
        {
            var activity = context.Activities.Find(id);
            activity.Completed = true;
            activity.CompletedAt = DateTime.Now;
            Save();
            return activity;
        }


       public Activity ChangeName(int id , string newName)
        {
            var activity = context.Activities.Find(id);
            activity.Name = newName;
            Save();
            return activity;
        }

        public Activity UncompleteActivity(int id)
        {
            var activity = context.Activities.Find(id);
            activity.Completed = false;
            Save();
            return activity;
        }



        public ActivityTime StartActivity(int id)
        {
            var activity = context.Activities.Find(id);

            activity.IsStarted = true;
            var at = new ActivityTime()
            {
                StartTime = DateTime.Now,
                EndTime = null,
                ActivityId = id
            };
            activity.ActivityTimes.Add(at);
            Save();
            return at;

        }

        public ActivityTime EndActivity(int id)
        {
            var activity = context.Activities.Find(id);
            var startedActivityTime = activity.ActivityTimes.
                FirstOrDefault(at => at.EndTime == null);
            activity.IsStarted = false;

            startedActivityTime.EndTime = DateTime.Now;

            Save();
            return startedActivityTime;
        }



        public void Save()
        {
            context.SaveChanges();
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    context.Dispose();
                }

            }
            this.disposed = true;
        }
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }


    }
}