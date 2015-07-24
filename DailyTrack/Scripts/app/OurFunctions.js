
function Activity(data) {
    var self = this;
    self.id = data.id || 0;
    self.Completed = ko.observable(data.completed || false);
    self.name = data.name || '';
    self.createDate = data.createDate || '';

    self.Completed.subscribe(function (newValue) {
        var method = newValue ? 'PUT' : 'DELETE';
        $.ajax({
            url: "/api/activities/" + self.id + "/complete",
            method: method,
        }).done(function (data) {

        })
    })

    /*
    self.Uncompleted.subscribe(function (newValue) {
        alert("Task " + self.id + " uncompleted !");
        $.ajax({
            url: "/api/activities/10/uncomplete",
            method: "PUT",
        }).done(function (data) {

        })
    })
    */
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
