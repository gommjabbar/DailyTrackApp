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
    public class FoldersApiController
    {
        [RoutePrefix("api/folders")]
        public class  FoldersApiController : ApiController
        {
            private IFolderRepository folderRepository;

            public FoldersApiController()
            {
                folderRepository = new FolderRepository(new DailyTrackDbContext());
            }

            [HttpGet]
            [Route("")]
            public IEnumerable<Folder> GetAllFolder()
            {
                return folderRepository.GetFolders();
        
            }

           

            [HttpPost]
            [Route("")]
            public Folder InsertFolder(Folder folder)
            {
                if (folder == null)
                    throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.BadRequest));

                folderRepository.InsertFolder(folder);
                folderRepository.Save();
                return folder;
            }
        }
    }
}