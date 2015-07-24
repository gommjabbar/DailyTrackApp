using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using DailyTrack.Models;

namespace DailyTrack.Repos
{
    public class FolderRepository : IDisposable, DailyTrack.Repos.IFolderRepository
    {
        private DailyTrackDbContext context;

        public FolderRepository(DailyTrackDbContext context)
        {
            this.context = context;
        }



        public IEnumerable<Folder> GetFolders()
        {
            return context.Folders.ToList();
        }

        public Activity GetFolderById(int? id)
        {
            return context.Folders.Find(id);
        }


        public void InsertFolder(Folder folder)
        {
            context.Folders.Add(folders);
        }

        public void Dispose()
        {
            throw new NotImplementedException();
        }
    }

    public void Save()
    {
        context.SaveChanges();
    }

    private bool disposed = false;

    protected virtual void Dispose(bool disposing)
    {
        if (!this.disposed)
        {
            if (disposing)
            {
                context.Dispose();
            }

        }
        this.disposed = true;
    }
    public void Dispose()
    {
        Dispose(true);
        GC.SuppressFinalize(this);
    }
}