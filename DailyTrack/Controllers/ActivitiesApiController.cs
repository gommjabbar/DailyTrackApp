using DailyTrack.Models;
using DailyTrack.Repos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DailyTrack.Controllers
{
    [RoutePrefix("api/activities")]
    public class ActivitiesApiController : ApiController
    {
        private IActivityRepository activityRepository;

        public ActivitiesApiController()
        {
            activityRepository = new ActivityRepository(new DailyTrackDbContext());
        }

        [HttpGet]
        [Route("")]
        public IEnumerable<Activity> GetAllActivitities()
        {
            return activityRepository.GetActivities();
        }

        [HttpPost]
        [Route("")]
        public bool InsertActivity(Activity activity)
        {
            activityRepository.InsertActivity(activity);
            activityRepository.Save();
            return true;
        }
    }
}
