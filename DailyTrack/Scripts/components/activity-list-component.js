ko.components.register('activity-list', {
    viewModel: function(params) {
        var self = this;        
        self.Activities = ko.observableArray();
        self.completed = params.completed;
        self.SelectedFolder = params.SelectedFolder;
        self.SelectedActivity = params.SelectedActivity;
        self.ActivityChange = params.ActivityChange;
        self.ActivityChange.subscribe(function () {
            self.fnGetActivities();
        })
        self.SelectedFolder.subscribe(function(){
            self.fnGetActivities();
        })


        

        self.fnSelectedActivityChanged = function (activity) {

            if (self.SelectedActivity())
                self.SelectedActivity().IsSelectedActivity(false);

            self.SelectedActivity(activity);
            self.SelectedActivity().IsSelectedActivity(true);

        }
        self.GetBaseRoute = function () {
            return "/api/folders/" + self.SelectedFolder().id+ "/activities";
        }

        self.fnGetActivities = function () {
            if (self.SelectedFolder() && self.SelectedFolder().id > 0) {
                $.ajax({
                    url: self.GetBaseRoute(),
                    method: "GET",
                    data: {
                        completed: self.completed
                    }
                }).done(function (data) {
                    var result = $.map(data, function (item, index) {
                        return new Activity(item);
                    });
                    //self.SelectedActivity(result[]);
                    self.Activities(result);
                })
            }
        }
        self.fnGetActivities();

        self.fnCompletedChanged = function (activity) {
            var method = activity.Completed() ? 'PUT' : 'DELETE';
            $.ajax({
                url: self.GetBaseRoute() + "/" + activity.id + "/complete",
                method: method,
            }).done(function (data) {
                self.ActivityChange(self.ActivityChange() + 1);
            })
        }
    },
    template: { fromFileType: 'html' }
});