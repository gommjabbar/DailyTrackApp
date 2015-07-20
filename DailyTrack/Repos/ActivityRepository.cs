using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using DailyTrack.Models;


namespace DailyTrack.Repos
{
    public class ActivityRepository
    {
         private DailyTrackDbContext context;

         public ActivityRepository(DailyTrackDbContext context)
         {
             this.context = context;
         }


         public Activity getActivityById(int id)
         {
             return context.Activities.Find(id);
         }


         public void insertActivity(Activity activity)
         {
             context.Activities.Add(activity);
         }

         public void DeleteActivity(int activityId)
         {
             Activity activity = context.Activities.Find(activityId);
             context.Activities.Remove(activity);
         }


         public void updateActivity(Activity activity)
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
             if (!this.disposed) ;
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