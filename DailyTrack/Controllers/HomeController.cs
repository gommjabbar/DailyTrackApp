using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace DailyTrack.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}
