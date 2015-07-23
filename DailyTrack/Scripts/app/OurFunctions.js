
function Activity(data) {
    var self = this;
    self.id = data.id || 0;
    self.Completed = ko.observable(data.completed || false);
    self.name = data.name || '';
    self.createDate = data.createDate || '';

    self.Completed.subscribe(function (newValue) {
        alert("Task " + self.id + " completed !");
        $.ajax({
            url: "/api/activities/1/complete",
            method: "PUT",
        }).done(function (data) {

        })
    })
}

function ActivitiesViewModel() {
    var self = this;

    self.NewActivityText = ko.observable();
    self.Activities = ko.observableArray();


    self.fnAddNewActivity = function () {
        var name = self.NewActivityText();
        $.ajax({
            url: "/api/activities",
            method: "POST",
            data: {
                name: name
            }
        }).done(function (data) {
            self.Activities.push(new Activity(data));
            self.NewActivityText("");
        })
    }

    self.fnGetActivities = function () {
        $.ajax({
            url: "/api/activities",
            method: "GET",
        }).done(function (data) {
            var result = $.map(data, function (item, index) {
                return new Activity(item);
            });
            self.Activities(result);
        })
    }
    self.fnGetActivities();

}
ko.applyBindings(new ActivitiesViewModel());
