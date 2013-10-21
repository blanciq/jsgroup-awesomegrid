(function() {
    "use strict";

    require.config({
        baseUrl: "public",
        paths: {
            "jquery": "lib/jQuery/jquery-1.9.1.min",
            "awesomeGrid": "lib/AwesomeGrid/scripts/AwesomeGrid.plugin",
            "awesomeGridViewModel": "lib/AwesomeGrid/scripts/AwesomeGrid.viewModel",
            "ajaxCalls": "lib/AwesomeGrid/scripts/ajaxCalls",
            "mustache": "lib/Mustache/mustache",
            "handlebars": "lib/Handlebars/handlebars",
            "text": "lib/Text/text",
            "knockout": "lib/Knockout/knockout-2.3.0",
            "knockoutMappings": "lib/Knockout/knockout.mapping-latest"
        },
        shim: {
            "awesomeGrid": {
                exports: "$.fn.awesomeGrid",
                deps: ["jquery", "knockout", "awesomeGridViewModel"],
                init: function ($, ko, koMapping) {
                    this.ko = ko;
                    //this.ko.mapping = koMapping;
                }
            },
            "awesomeGridViewModel": {
                exports: "$.awesomeGridViewModel",
                deps: ["jquery", "knockout", "knockoutMappings"]
            },
            "mustache": {
                exports: "stache"
            }, 
            "handlebars": {
                exports: "bars"
            }
        }
    });
}()); 
