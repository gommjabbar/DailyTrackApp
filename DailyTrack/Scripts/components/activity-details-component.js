ko.components.register('activity-details', {
    viewModel: function (params) {
        var self = this;
        self.SelectedActivity = params.SelectedActivity;
        self.DisplayActivityDetails = ko.observable(false);

        self.SelectedActivity.subscribe(function (newSelectedActivity) {
            self.fnShowActivityDetails();
        })

        self.fnShowActivityDetails = function () {
            
            self.DisplayActivityDetails(true);
        }

        self.ShowCompletedActivities = ko.observable(false);
        self.ShowCompletedButtonText = ko.computed(function () {
            return self.ShowCompletedActivities() == true ? "Hide" : "Show";
        })

  
    },
    template: { fromFileType: 'html' }
});