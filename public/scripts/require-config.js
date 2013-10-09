(function() {
    "use strict";

    require.config({
        baseUrl: "public",
        paths: {
            "jquery": "lib/jQuery/jquery-1.9.1.min",
            "awesomeGrid": "lib/AwesomeGrid/scripts/AwesomeGrid.plugin",
            "ajaxCalls": "lib/AwesomeGrid/scripts/ajaxCalls",
            "mustache": "lib/Mustache/mustache",
            "handlebars": "lib/Handlebars/handlebars",
            "text": "lib/Text/text"
        },
        shim: {
            "awesomeGrid": {
                exports: "$",
                deps: ["jquery"]
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
