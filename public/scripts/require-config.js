(function() {
    "use strict";

    require.config({
        baseUrl: "public",
        paths: {
            "jquery": "lib/jQuery/jquery-1.9.1.min",
            "jqueryval": "lib/jQuery/jquery.validate.min",
            "awesomeGrid": "lib/AwesomeGrid/scripts/AwesomeGrid.plugin",
            "awesomeGridViewModel": "lib/AwesomeGrid/scripts/AwesomeGrid.viewModel",
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
                deps: ["jquery", "jqueryval", "knockout", "knockoutMappings"]
            },
            "handlebars": {
                exports: "bars"
            },
            "jqueryval": {
                deps: ["jquery"]
            }
        }
    });
}()); 
