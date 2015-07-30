ko.components.register('activity-details', {
    viewModel: function (params) {
        var self = this;
        self.SelectedActivity = params.SelectedActivity;
        self.SelectedFolder = params.SelectedFolder;
        self.ActivityChange = params.ActivityChange;



        self.fnStartActivity = function () {
            $.ajax({
                url: "/api/folders/" + self.SelectedFolder().id + "/activities/" + self.SelectedActivity().id,
                method:"Post",
            }).done(function(result){

            })
            
        }

        self.fnEndActivity = function () {
            $.ajax({
                url: "/api/folders/" + self.SelectedFolder().id + "/activities/" + self.SelectedActivity().id,
                method: "Post",

            }).doen(function (result) {

            })
        }

        self.fnRemoveActivity = function () {
            $.ajax({
                url: "/api/folders/" + self.SelectedFolder().id + "/activities/" + self.SelectedActivity().id,
                method: "Delete",
            }).done(function (result) {
                self.ActivityChange(self.ActivityChange() + 1);
            })
        }

    },
    template: { fromFileType: 'html' }
});