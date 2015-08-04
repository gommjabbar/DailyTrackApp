using DailyTrack.Models;
using DailyTrack.Repos;
using DailyTrack.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DailyTrack.Controllers
{
    [RoutePrefix("api/folders/{folderId:int}/activities")]


   // [RoutePrefix("api/folders/{folderId:int}/activityTimes")]
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

        [HttpPost]
        [Route("{id:int}/name")]
        public Activity ChangeName(int id ,string newName)
        {
            return activityRepository.ChangeName( id,newName);
        }


        [HttpPost]
        [Route("{id:int}/start")]
        public ActivityTime StartActivity(int id)
        {
            return activityRepository.StartActivity(id);
        }

        [HttpPost]
        [Route("{id:int}/end")]
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

      //  [HttpGet]
       // [Route("")]
       // public IEnumerable<ActivityTime> GetAllActivitityTimes(int id)
       // {
        //    return activityRepository
         //       .GetActivityTimes()
         //       .Where(activity => activity.Id == id);
       // }
        /*  [HttpGet]
          [Route ('{id:int}')]

          public JsonResponse<ActivityTime>  GetActivityTimes(int id)
          {
              return new JsonResponse<ActivityTime>(Request, () =>
              {
                  activityRepository.StartActivity(id);
                  activityRepository.EndActivity(id);
              });

          } */




        [HttpPost]
        [Route("")]
        public JsonResponse<Activity> InsertActivity(int folderId, Activity activity)
        {
            return new JsonResponse<Activity>(Request, () =>
            {
                if (activity == null)
                    throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.BadRequest));

                activityRepository.InsertActivity(activity);
                activityRepository.Save();
                return activity;
            });
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
