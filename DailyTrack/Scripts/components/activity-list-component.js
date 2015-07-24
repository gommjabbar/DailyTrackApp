ko.components.register('activity-list', {
    viewModel: function(params) {
        var self = this;
        self.Test = params.text;
    },
    template: "<div data-bind='text: Test'></div>"//{ fromFileType: 'html' }
});