using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using DailyTrack.Models;

namespace DailyTrack.Repos
{
    public class FolderRepository : IFolderRepository
    {
        private DailyTrackDbContext context;

        public FolderRepository(DailyTrackDbContext context)
        {
            this.context = context;
        }

        public IEnumerable<Folder> GetFolders()
        {
            var res = context.Folders.ToList();
            return res;
        }

        public Folder GetFolderById(int? id)
        {
            return context.Folders.Find(id);
        }


        public void InsertFolder(Folder folder)
        {
            context.Folders.Add(folder);
        }


        public void Save()
        {
            context.SaveChanges();
        }
    }

}