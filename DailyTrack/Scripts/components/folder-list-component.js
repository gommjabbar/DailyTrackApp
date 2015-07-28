ko.components.register('folder-list', {
    viewModel: function (params) {
        var self = this;
        self.Folders = ko.observableArray();
        self.FolderChange = params.FolderChange;
        self.SelectedFolder = params.SelectedFolder;
        self.FolderChange.subscribe(function () {
            self.fnGetFolders();
        })

        self.fnSelectedFolderChanged = function (folder) {
            //self.SelectedFolder().IsSelected(false);
            self.SelectedFolder(folder);
            self.FolderChange(self.FolderChange() + 1);
            //self.SelectedFolder().IsSelected(true);
        }

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
                self.SelectedFolder(result[0]);
                //self.fnSelectedFolderChanged(result[0]);
                self.Folders(result);
            })
        }
        self.fnGetFolders();
    },



    template: { fromFileType: 'html' }
});