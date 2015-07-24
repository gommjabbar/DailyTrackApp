ko.components.register('folder-list', {
    viewModel: function (params) {
        var self = this;
        self.Folders = ko.observableArray();
        self.FolderChange = params.FolderChange;
        self.FolderChange.subscribe(function () {
            self.fnGetFolders();
        })

        self.fnGetFolders = function () {
            $.ajax({
                url: "/api/folders",
                method: "GET",
                data: {
                }
            }).done(function (data) {
                var result = $.map(data, function (item, index) {
                    return new Folder(item);
                });
                self.Folders(result);
            })
        }
        self.fnGetFolders();
    },
    template: { fromFileType: 'html' }
});