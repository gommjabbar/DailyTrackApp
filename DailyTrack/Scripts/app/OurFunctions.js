//@section Scripts {
   // <script type="text/javascript">

   /*     function Activity(data, initialType) {
            var self = this;
            self.Completed = ko.observable(false);
            self.name = data.name || '';
            self.createDate = data.createDate || '';
            self.ActivityType = ko.observable(initialType);

            self.Completed.subscribe(function (newValue) {
                alert(self.name + newValue);
            })
        }

        function AddNewActivity(name, initialType) {
            var self = this;
            self.name = name;
            self.type = ko.observable(initialType);
        }

    function ActivitiesViewModel() {
        var self = this;
        self.availableTypes = [
            { nameActivityType: "study" ,start:3},
            { nameActivityType: "exercises",start:4},
            { nameActivityType: "groceries",start:5}
        ];


        // Operations
        self.addActivity = function() {
            self.types.push(new AddNewActivity("", self.availableTypes[0]));
        }
   
        //self.NewActivityText
       // self.NewActivityText = ko.observableArray();
        self.Activities = ko.observableArray();
        //self.fnAddNewActivity

      /*  self.fnAddNewActivity = function () {
              $.ajax({
                url: "/api/activities" + "id" + "complete",
                method:"PUT",
                
            }).done(function(data) {
                var result = $.map(data,function (item ,index){
                    return new Activity(item, self.availableTypes[1]);
                });
            })
        } */

        //self.fnAddNewActivities;

     


       
      

      /*  self.fnGetActivities = function () {
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

   // </script>
//} */

function Activity(data) {
    this.name = ko.observable(data.name);
    this.isDone = ko.observable(data.isDone);
}

function ActivityListViewModel() {
    // Data
    var self = this;
    self.activities = ko.observableArray([]);
    self.newActivityText = ko.observable();
    self.incompleteActivities = ko.computed(function() {
        return ko.utils.arrayFilter(self.activities(), function(activity) { return !activity.isDone() });
    });

    // Operations
    self.addActivity = function() {
        self.activities.push(new activity({ name: this.newActivityText() }));
        self.newActivityText("");
    };
    self.removeActivity = function(activity) { self.activities.remove(activity) };
    self.save = function() {
        $.ajax("/activities", {
            data: ko.toJSON({ activities: self.activities }),
            type: "post", contentType: "application/json",
            success: function(result) { alert(result) }
        });
    };
    // Load initial state from server, convert it to Activity instances, then populate self.activities
    $.getJSON("/activities", function(allData) {
        var mappedActivities = $.map(allData, function(item) { return new Activity(item) });
        self.activities(mappedActivities);
    });

    // Load initial state from server, convert it to Activity instances, then populate self.activities
    $.getJSON("/activities", function (allData) {
        var mappedActivities = $.map(allData, function (item) { return new Activity(item) });
        self.activities(mappedActivities);
    });

}

ko.applyBindings(new ActivityListViewModel());