using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using DailyTrack.Models;


namespace DailyTrack.Repos
{
   public class ActivityRepository :  IDisposable, DailyTrack.Repos.IActivityRepository
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

         public Activity GetActivityById(int? id)
         {
             return context.Activities.Find(id);
         }


         public void InsertActivity(Activity activity)
         {
             context.Activities.Add(activity);
         }

         public void DeleteActivity(int? Id)
         {
             Activity activity = context.Activities.Find(Id);
             context.Activities.Remove(activity);
         }


         public void UpdateActivity(Activity activity)
         {
             context.Entry(activity).State = System.Data.Entity.EntityState.Modified;

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