using DailyTrack.Models;
using System;
using System.Collections.Generic;
namespace DailyTrack.Repos
{
    public interface IActivityRepository
    {
        void DeleteActivity(int? Id);
        IEnumerable<Activity> GetActivities();
        Activity GetActivityById(int? id);
        void InsertActivity(Activity activity);
        Activity CompleteActivity(int id);
        Activity UncompleteActivity(int id);
        void Save();
        void UpdateActivity(Activity activity);
    }
}
