(function() {
    "use strict";

    require.config({
        baseUrl: "public/scripts",
        paths: {
            "jquery": "../lib/jQuery/jquery-1.9.1.min",
            "awesomeGrid": "../lib/AwesomeGrid/scripts/AwesomeGrid.plugin"
        },
        shim: {
            "awesomeGrid": {
                exports: "$",
                deps: ["jquery"]
            }
        }
    });
}()); 