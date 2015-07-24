ko.components.register('activity-list', {
    viewModel: function(params) {
        var self = this;        
        self.Activities = ko.observableArray();

        self.fnGetActivities = function () {
            $.ajax({
                url: "/api/activities",
                method: "GET",
            }).done(function (data) {
                var result = $.map(data, function (item, index) {
                    return new Activity(item);
                });
                self.Activities(result);
            })
        }
        self.fnGetActivities();
    },
    template: { fromFileType: 'html' }
});