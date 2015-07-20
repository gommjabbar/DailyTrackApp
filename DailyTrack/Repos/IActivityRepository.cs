using System;
using System.Collections.Generic;
using DailyTrack.Models;

namespace  DailyTrack.Repos
{
    public interface IActivityRepository : IDisposable
    {
        IEnumerable<Activity> GetStudents();
        Activity GetActivityById(int activityId);
        void Insertactivity(Activity activity);
        void DeleteActivity(int ActivityId);
        void UpdateActivity(Activity  activity);
        void Save();
    }
}
