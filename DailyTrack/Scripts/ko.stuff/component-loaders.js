
var fromHtmlTemplateLoader = {
    loadTemplate: function (name, templateConfig, callback) {
        if (templateConfig.fromFileType) {

            var dashedComponentName = name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
            var templateFolder = '/templates/' + dashedComponentName.split('-')[0] + '/';

            // Uses jQuery's ajax facility to load the markup from a file
            var fullUrl = templateFolder + dashedComponentName + '-template.' + templateConfig.fromFileType;
            $.get(fullUrl, function (markupString) {
                // We need an array of DOM nodes, not a string.
                // We can use the default loader to convert to the
                // required format.
                ko.components.defaultLoader.loadTemplate(name, markupString, callback);
            });
        } else {
            // Unrecognized config format. Let another loader handle it.
            callback(null);
        }
    }
};

// Register it
ko.components.loaders.unshift(fromHtmlTemplateLoader);