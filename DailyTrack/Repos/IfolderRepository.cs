using DailyTrack.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DailyTrack.Repos
{
    public class IFolderRepository
    {
        IEnumerable<Folder> GetFolders();
        Folder GetFolderById(int? id);
        void  InsertFolder(Folder folder);
        void Save();
    }
}