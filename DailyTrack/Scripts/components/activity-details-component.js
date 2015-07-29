ko.components.register('activity-details', {
    viewModel: function (params) {
        var self = this;
        self.SelectedActivity = params.SelectedActivity;

        //The function removes an activity
        self.fnRemoveActivity = function () {
            $.ajax({
                url: "/api/activities/" + self.SelectedActivity().id,
                method: "Delete",
                async: false,
            }).done(function (result) {
            })
        }
    },
    template: { fromFileType: 'html' }
});