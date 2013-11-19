$.fn.awesomeGrid = function (options) {
    "use strict";

    var defaultOptions = {
        useTemplates: false,
        templateFunction: null
    };
    options = $.extend({}, defaultOptions, options);

    ko.applyBindings(new $.awesomeGridViewModel(options));
};
