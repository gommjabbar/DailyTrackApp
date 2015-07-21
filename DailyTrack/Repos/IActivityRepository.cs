using System;
namespace DailyTrack.Repos
{
    public interface IActivityRepository
    {
        void DeleteActivity(int? Id);
        System.Collections.Generic.IEnumerable<DailyTrack.Models.Activity> GetActivities();
        DailyTrack.Models.Activity GetActivityById(int? id);
        void InsertActivity(DailyTrack.Models.Activity activity);

        void Save();
        void UpdateActivity(DailyTrack.Models.Activity activity);
    }
}
