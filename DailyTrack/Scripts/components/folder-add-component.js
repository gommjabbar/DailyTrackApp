ko.components.register('folder-add', {
    viewModel: function (params) {
        var self = this;
        self.NewFolderText = ko.observable();
        self.Folders = ko.observableArray();
        self.FolderChange = params.FolderChange;
      

self.fnAddNewFolder = function () {
    var name = self.NewFolderText();
    $.ajax({
        url: "/api/folders",
        method: "POST",
        data: {
            name: name
        }
    }).done(function (data) {
        self.NewFolderText("");
    })
}
    },
    template: { fromFileType: 'html' }
});
