ko.components.register('activity-details', {
    viewModel: function (params) {
        var self = this;
        self.SelectedActivity = params.SelectedActivity;
        self.DisplayActivityDetails = ko.observable(false);

   

        self.fnShowActivityDetails = function () {
            
            self.DisplayActivityDetails(true);
        }
  
    },
    template: { fromFileType: 'html' }
});