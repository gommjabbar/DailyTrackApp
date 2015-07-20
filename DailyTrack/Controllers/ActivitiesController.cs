using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using DailyTrack.Models;
using DailyTrack.Repos;


namespace DailyTrack.Controllers
{
    public class ActivitiesController : Controller
    {
        private IActivityRepository activityRepository;

        public ActivitiesController()
        {
            this.ActivityRepository = new ActivityRepository(new DailyTrackDbContext());
        }

        // GET: Activities

        public ActionResult Index()
        {
            return View(ActivityRepository.GetActivities());
        }

        // GET: Activities/Details/5
        public ActionResult Details(int? id)
        {
            Activity activity = ActivityRepository.GetActivityById(id);
            return View(activity);
        }

        // GET: Activities/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Activities/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]

        public ActionResult Create([Bind(Include = "Id,Name,StartTime,EndTime")] Activity activity)
        {
            if (ModelState.IsValid)
            {
                ActivityRepository.InsertActivity(activity);
                ActivityRepository.Save();
                return RedirectToAction("Index");
            }
            return View(activity);
        }

        private ActionResult RedirectToAction(char p)
        {
            throw new NotImplementedException();
        }


        // GET: Activities/Edit/5
        public ActionResult Edit(int? id)
        {
            Activity activity = ActivityRepository.GetActivityById(id);
            return View(activity);
        }

        // POST: Activities/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Name,StartTime,EndTime")] Activity activity)
        {
            if (ModelState.IsValid)
            {
                ActivityRepository.UpdateActivity(activity);
                ActivityRepository.Save();
                return RedirectToAction("Index");
            }
            return View(activity);
        }

        // GET: Activities/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Activity activity = ActivityRepository.GetActivityById(id);
            ActivityRepository.DeleteActivity(id);
            ActivityRepository.Save();
            {
                return HttpNotFound();
            }
            return View(activity);
        }

        // POST: Activities/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                ActivityRepository.Dispose();
            }
            base.Dispose(disposing);
        }

        public ActivityRepository ActivityRepository { get; set; }
        public Activity activity { get; set; }
    }
}
