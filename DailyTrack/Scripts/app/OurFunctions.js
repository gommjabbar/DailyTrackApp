//@section Scripts {
// <script type="text/javascript">

function Activity(data, initialType) {
    var self = this;
    self.Completed = ko.observable(false);
    self.name = data.name || '';
    self.createDate = data.createDate || '';
    self.ActivityType = ko.observable(initialType);

    self.Completed.subscribe(function (newValue) {
        alert(self.name + newValue);
    })
}

var addNewActivity = function () {
    var name = $('#newActivityName').val();
   // self.NewActivityText = ko.observableArray();
    $.ajax({
        url: "/api/activities",
        method: "POST",
        data: {
            id: -1,
            name: name
        }
    }).done(function (data) {
        alert(data);
    })
}


function ActivitiesViewModel() {
    var self = this;
    self.availableTypes = [
        { nameActivityType: "study", start: 3 },
        { nameActivityType: "exercises", start: 4 },
        { nameActivityType: "groceries", start: 5 }
    ];


    // Operations
    //  self.addActivity = function() {
    //    self.types.push(new AddNewActivity("", self.availableTypes[0]));
    //  }

    //self.NewActivityText
    self.NewActivityText = ko.observableArray();
    self.Activities = ko.observableArray();


    //self.fnAddNewActivity

    self.fnAddNewActivity = function () {
 
        //var name = $('#newActivityName').val();
       
        //$.ajax({
         //   url: "/api/activities",
         //   method: "POST",
            //data: {
             //   name: name
           // }
        //}).done(function (data) {
         //   alert(data);
        addNewActivity();
       // })
    }

    self.fnAddNewActivity();





    self.fnGetActivities = function () {
        $.ajax({
            url: "/api/activities",
            method: "GET",
        }).done(function (data) {
            var result = $.map(data, function (item, index) {
                return new Activity(item, self.availableTypes[0]);
            });
            self.Activities(result);
        })
    }
    self.fnGetActivities();
}
ko.applyBindings(new ActivitiesViewModel());

