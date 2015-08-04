ko.components.register('activity-details', {
    viewModel: function (params) {
        var self = this;
        self.SelectedActivity = params.SelectedActivity;
        self.SelectedFolder = params.SelectedFolder;
        self.ActivityChange = params.ActivityChange;
        self.ActivityEditedText = ko.observable();
        self.SelectedActivity.subscribe(function (newValue) {
            self.ActivityEditedText(newValue.name());
        })

        self.GetRoute = function () {
            return "/api/folders/" + self.SelectedFolder().id + "/activities/" + self.SelectedActivity().id;
        }
        

        self.fnStartActivity = function () {
            $.ajax({ 
                url: self.GetRoute() + "/start",
                method:"Post",
            }).done(function(result){
                
            })
            
        }

        self.fnEditActivityName = function () {
            $.ajax({
                url: self.GetRoute() + "/name",
                method: "Post",
                data: {
                    name:name
                }
            }).done(function(result){
                self.SelectedActivity().name(self.ActivityEditedText());


      })
        }

        self.fnEndActivity = function () {
            $.ajax({
                url: self.GetRoute() +"/end",
                method: "Post",

            }).done(function (result) {

            })
        }

        self.fnRemoveActivity = function () {
            $.ajax({
                url: self.GetRoute(),
                method: "Delete",
            }).done(function (result) {
                self.ActivityChange(self.ActivityChange() + 1);
            })
        }



        self.fnGetActivityStartTimes = function () {
            $.ajax({
                url: self.GetRoute() + "/start",
                method: "Get",
                
            }).done(function (result){
            })
        }

        self.fnGetActivityEndTimes = function () {
            $.ajax({
                url: self.GetRoute() + "/end",
                method: "Get",
                
            }).doen(function (result) {

            })
        }

    },
    template: { fromFileType: 'html' }
});