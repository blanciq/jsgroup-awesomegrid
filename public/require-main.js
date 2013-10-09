define(
    ["jquery", "mustache", "text!lib/Templates/gridRow.html", "awesomeGrid"],
    function($, stache, template) {
        "use strict";

        function stacheTemplating(inputData) {
            $.each(inputData, function (i, val) {
                val.idx = (function(in_i){return in_i+1;})(i);
                val.first = i === 0;
                val.last = i === inputData.length - 1;
                val.odd = (i + 1) % 2;
            });

            var data = { 
                people: inputData,
                emailLink: function (text, render) {
                    return function (text, render) {
                        var renderedText = render(text);
                        return '<a href="' + renderedText + '">' + renderedText + '</a>';
                    };
                }
            };
            return stache.render(template, data);
        }

        $(".awesome-grid-table").awesomeGrid( { 
            useTemplates: true,
            templateFunction: stacheTemplating
        });
});
