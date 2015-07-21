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

    function ActivitiesViewModel() {
        var self = this;
        self.availableTypes = [
            { nameActivityType: "study" ,start:3},
            { nameActivityType: "exercises",start:4},
            { nameActivityType: "groceries",start:5}
        ];
        //self.NewActivityText
        self.NewActivityText = ko.observableArray();
        self.Activities = ko.observableArray();
        //self.fnAddNewActivity

        self.fnAddNewActivity = function () {
            $.ajax({
                url: "/api/activities" + "id" + "complete",
                method:"PUT",
                
            }).done(function(data) {
                var result = $.map(data,function (item ,index){
                    return new Activity(item, self.availableTypes[1]);
                });
            })
        }
        self.fnAddNewActivities();

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

   // </script>
//}