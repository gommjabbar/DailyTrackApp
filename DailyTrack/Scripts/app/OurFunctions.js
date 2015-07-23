//@section Scripts {
// <script type="text/javascript">

function Activity(data) {
    var self = this;
    self.id = data.id || 0;
    self.Completed = ko.observable(data.completed || false);
    self.name = data.name || '';
    self.createDate = data.createDate || '';

    self.Completed.subscribe(function (newValue) {
        alert("Task "+self.id+" completed !");
    })
}


/*
function confirmation() {
    var answer = confirm("Are you sure you want to delete this activity ?.")
    if(answer)
    {
        $.ajax({
            url:"/api/activities",
            method:"PUT",
            function(data){
            alert(data); 
        });
    } 
    return false; 
}
*/


function ActivitiesViewModel() {
    var self = this;

    self.NewActivityText = ko.observable();
    self.Activities = ko.observableArray();


    self.fnAddNewActivity = function () {
        var name = self.NewActivityText();
        console.log(name);
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

    /*
    self.fnDeleteActivity = function () {
        var id = self.Id()
        $.ajax({
            url: "/api/activities",
            method: "DELETE",
            data: {
                id: id
            }
            
        }).done(function(data)){
               self.Id();
             
}
*/


    //}
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
