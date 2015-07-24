function Folder(data) {
    var self = this;
    self.id = data.id || 0;
    self.name = data.name || '';
}

function Activity(data) {
    var self = this;
    self.id = data.id || 0;
    self.Completed = ko.observable(data.completed || false);
    self.name = data.name || '';
    self.createDate = data.createDate || '';

    //self.Completed.subscribe(function (newValue) {
    //    var method = newValue ? 'PUT' : 'DELETE';
    //    $.ajax({
    //        url: "/api/activities/" + self.id + "/complete",
    //        method: method,
    //    }).done(function (data) {

    //    })
    //})
}

/*var c = 0;
var t;
var timer_is_on = 0;

function timedCount() {
    document.getActivityById('txt').value = c;
    c = c + 1;
    t = setTimeout(function () { timedCount() }, 1000);
}

function doTimer() {
    if (!timer_is_on) {
        timer_is_on = 1;
        timedCount();
    }
}

function stopCount() {
    clearTimeout(t);
    timer_is_on = 0;
} */

function ActivitiesViewModel() {
    var self = this;

    self.NewActivityText = ko.observable();
    self.ActivityChange = ko.observable(0);
    self.FolderChange = ko.observable(0);
    
    self.folders = ["Inbox"];
    self.ChosenFolderId = ko.observable();
    self.SelectedFolder = ko.observable();

    self.fnAddNewActivity = function () {
        var name = self.NewActivityText();
        $.ajax({
            url: "/api/activities",
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
