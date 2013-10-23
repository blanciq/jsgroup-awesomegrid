$.fn.awesomeGrid = function (options) {
    "use strict";

    var defaultOptions = {
        useTemplates: false,
        templateFunction: null
    };
    options = $.extend({}, defaultOptions, options);

    this.fadeOut('slow').fadeIn('slow');

    ko.applyBindings(new $.awesomeGridViewModel(options));
};
