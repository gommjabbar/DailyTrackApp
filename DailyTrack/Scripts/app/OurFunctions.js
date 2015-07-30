function Folder(data) {
    var self = this;
    self.id = data.id || 0;
    self.name = data.name || '';
    self.IsSelected = ko.observable(false);
    self.SelectedCssClass = ko.computed(function () {
        return self.IsSelected() ? 'folder-selected' : 'folder-not-selected';
    })
}

function Activity(data) {
    var self = this;
    self.id = data.id || 0;
    self.Completed = ko.observable(data.completed || false);
    self.name = data.name || '';
    self.createDate = data.createDate || '';
    self.IsSelectedActivity = ko.observable(false);
    self.SelectedActivityCssClass = ko.computed(function () {
        return self.IsSelectedActivity() ? 'activity-selected' : 'activity-not-selected';
    })
}


function ActivitiesViewModel() {
    var self = this;

    self.NewActivityText = ko.observable();
    self.NewFolderText = ko.observable();
    self.ActivityChange = ko.observable(0);
    self.FolderChange = ko.observable(0);

    
    self.folders = ["Inbox"];
    self.ChosenFolderId = ko.observable();
    self.SelectedFolder = ko.observable();
    self.SelectedActivity = ko.observable(false);
    self.ShowActivityDetails = ko.observable(false);
    self.ShowCompletedActivities = ko.observable(false);
    self.ShowCompletedButtonText = ko.computed(function () {
        return self.ShowCompletedActivities() == true ? "Hide" : "Show";
    })
    self.SelectedActivity.subscribe(function (newSelectedActivity) {
        if (newSelectedActivity) {
            self.ShowActivityDetails(true);
        }
        else {
            self.ShowActivityDetails(false);
        }
    })

    self.fnShowHideCompletedActivities = function () {
        self.ShowCompletedActivities(!self.ShowCompletedActivities());
    }
   self.fnAddNewFolder = function () {
        var name = self.NewFolderText();
        $.ajax({
            url: "/api/folders",
            method: "POST",
            data: {
                name: name
            }
        }).done(function (data) {
            self.FolderChange(self.FolderChange() + 1);
            self.NewFolderText("");
        })
    }

   self.fnAddNewActivity = function () {
       var name = self.NewActivityText();
       $.ajax({
           url: "api/folders/"+ self.SelectedFolder().id +"/activities",
           method: "POST",
           data: {
               name: name
           }
       }).done(function (data) {
           self.ActivityChange(self.ActivityChange() + 1);
           self.NewActivityText("");
       })
   }   

    // Behaviours    
    self.goToFolder = function(folder) { 
        self.ChosenFolderId(folder);
        $.get('/mail', { folder: folder }, self.SelectedFolder);
    // Show inbox by default
    self.goToFolder('Inbox');
};

}
ko.applyBindings(new ActivitiesViewModel());
