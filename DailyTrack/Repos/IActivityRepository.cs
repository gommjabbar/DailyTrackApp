using DailyTrack.Models;
using System;
using System.Collections.Generic;
namespace DailyTrack.Repos
{
    public interface IActivityRepository
    {
        void DeleteActivity(int? Id);
        IEnumerable<Activity> GetActivities();
       // IEnumerable<ActivityTime> GetActivityTimes();
        Activity GetActivityById(int? id);
        void InsertActivity(Activity activity);
        Activity CompleteActivity(int id);
        Activity ChangeName(int id, string newName);
        Activity UncompleteActivity(int id);
        ActivityTime StartActivity(int id);
        ActivityTime EndActivity(int id);
        void Save();
        void UpdateActivity(Activity activity);
  
    }
}
