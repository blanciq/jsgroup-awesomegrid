(function() {
    "use strict";

    require.config({
        baseUrl: "public",
        paths: {
            "jquery": "lib/jQuery/jquery-1.9.1.min",
            "jqueryValidation": "lib/Validation/jquery.validate",
            "awesomeGrid": "lib/AwesomeGrid/scripts/AwesomeGrid.plugin",
            "awesomeGridViewModel": "lib/AwesomeGrid/scripts/AwesomeGrid.viewModel",
            "ajaxCalls": "lib/AwesomeGrid/scripts/ajaxCalls",
            "handlebars": "lib/Handlebars/handlebars",
            "text": "lib/Text/text",
            "knockout": "lib/Knockout/knockout-2.3.0",
            "knockoutMappings": "lib/Knockout/knockout.mapping-latest"
        },
        shim: {
            "awesomeGrid": {
                exports: "$.fn.awesomeGrid",
                deps: ["jquery", "knockout", "awesomeGridViewModel"],
                init: function ($, ko) {
                    this.ko = ko;
                }
            },
            "awesomeGridViewModel": {
                exports: "$.awesomeGridViewModel",
                deps: ["jquery", "knockout", "knockoutMappings"]
            },
            "handlebars": {
                exports: "bars"
            },
            "jqueryValidation": {
                deps: ["jquery"]
            }
        }
    });
}()); 
