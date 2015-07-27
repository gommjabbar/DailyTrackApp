ko.components.register('activity-list', {
    viewModel: function(params) {
        var self = this;        
        self.Activities = ko.observableArray();
        self.completed = params.completed;
        self.SelectedFolder = params.SelectedFolder;
        self.ActivityChange = params.ActivityChange;
        self.ActivityChange.subscribe(function () {
            self.fnGetActivities();
        })
        self.SelectedFolder.subscribe(function(){
            self.fnGetActivities();
        })
        self.fnGetActivities = function () {
            $.ajax({
                //url: api/folders/ +self.SelectedFolder().id + "/activities
                url: "/api/activities",
                method: "GET",
                data: {
                    completed: self.completed
                }
            }).done(function (data) {
                var result = $.map(data, function (item, index) {
                    return new Activity(item);
                });
                self.Activities(result);
            })
        }
        self.fnGetActivities();

        self.fnCompletedChanged = function (activity) {
            var method = activity.Completed() ? 'PUT' : 'DELETE';
            $.ajax({
                url: "/api/activities/" + activity.id + "/complete",
                method: method,
            }).done(function (data) {
                self.ActivityChange(self.ActivityChange() + 1);
            })
        }
    },
    template: { fromFileType: 'html' }
});