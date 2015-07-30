ko.components.register('activity-details', {
    viewModel: function (params) {
        var self = this;
        self.SelectedActivity = params.SelectedActivity;

        
        self.fnRemoveActivity = function () {
            $.ajax({
                url: "/api/folders/{folderId:int}/activities/"+ self.SelectedActivity().id,
                method: "Delete",
            }).done(function (result) {
            })
        }
    },
    template: { fromFileType: 'html' }
});