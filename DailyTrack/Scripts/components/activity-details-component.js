ko.components.register('activity-details', {
    viewModel: function (params) {
        var self = this;
        self.SelectedActivity = params.SelectedActivity;
        self.SelectedFolder = params.SelectedFolder;

        
        self.fnRemoveActivity = function () {
            $.ajax({
                url: "api/folders/" + self.SelectedFolder().id + "/activities" + self.SelectedActivity().id,
                method: "Delete",
            }).done(function (result) {
            })
        }
    },
    template: { fromFileType: 'html' }
});