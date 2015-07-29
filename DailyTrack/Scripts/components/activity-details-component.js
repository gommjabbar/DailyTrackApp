ko.components.register('activity-details', {
    viewModel: function (params) {
        var self = this;
        self.SelectedActivity = params.SelectedActivity;
        self.DisplayActivityDetails = ko.observable(false);

        self.SelectedActivity.subscribe(function () {
            self.fnShowActivityDetails();
        })

        self.fnShowActivityDetails = function () {
            
            self.DisplayActivityDetails(true);
        }
  
    },
    template: { fromFileType: 'html' }
});