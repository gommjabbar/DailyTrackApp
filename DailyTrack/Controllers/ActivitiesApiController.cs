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
    [RoutePrefix("api/folders/{folderId:int}/activities")]

    public class ActivitiesApiController : ApiController
    {
        private IActivityRepository activityRepository;

        public ActivitiesApiController()
        {
            activityRepository = new ActivityRepository(new DailyTrackDbContext());
        }

        [HttpGet]
        [Route("")]
        public IEnumerable<Activity> GetAllActivitities(int folderId, bool completed)
        {
            return activityRepository
                .GetActivities()
                .Where(activity => activity.Completed == completed && activity.FolderId == folderId);
        }

        [HttpPut]
        [Route("{id:int}/complete")]
        public Activity CompleteActivity(int id)
        {
            return activityRepository.CompleteActivity(id);
        }



        [HttpPut]
        [Route("{id:int}")]
        public ActivityTime StartActivity(int id)
        {
            return activityRepository.StartActivity(id);
        }

        [HttpPost]
        [Route("{id:int}/complete")]
        public ActivityTime EndActivity(int id)
        {
            return activityRepository.EndActivity(id);
        }


        [HttpDelete]
        [Route("{id:int}/complete")]
        public Activity UncompleteActivity(int id)
        {
            return activityRepository.UncompleteActivity(id);
        }


        [HttpPost]
        [Route("")]
        public Activity InsertActivity(int folderId, Activity activity)
        {
            if (activity == null)
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.BadRequest));

            activityRepository.InsertActivity(activity);
            activityRepository.Save();
            return activity;
        }

        [HttpDelete]
        [Route("{id:int}")]
        public void DeleteActivity(int id)
        {
            activityRepository.DeleteActivity(id);
            activityRepository.Save();
        }

    }
}
