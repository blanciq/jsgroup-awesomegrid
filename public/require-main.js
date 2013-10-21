define(
    ["jquery", "mustache", "handlebars", "text!lib/Templates/gridRowMustache.html", "text!lib/Templates/gridRowHandlebars.html", "awesomeGrid"],
    function($, stache, bars, template, templateHandleBars) {
        "use strict";

        function stacheTemplating(inputData) {
            $.each(inputData, function(i, val) {
                val.idx = (function(in_i) { return in_i + 1; })(i);
                val.first = i === 0;
                val.last = i === inputData.length - 1;
                val.odd = (i + 1) % 2;
            });

            var data = {
                people: inputData,
                emailLink: function(text, render) {
                    return function(text, render) {
                        var renderedText = render(text);
                        return '<a href="mailto:' + renderedText + '">' + renderedText + '</a>';
                    };
                }
            };
            return stache.render(template, data);
        }

        function handlebarTemplating(inputData) {
            Handlebars.registerHelper("customEach", function(arr, options) {
                if (options.inverse && !arr.length)
                    return options.inverse(this);

                return arr.map(function(item, index) {
                    item.$index = index + 1;
                    item.$first = index === 0;
                    item.$odd = (index + 1) % 2;
                    item.$last = index === arr.length - 1;
                    return options.fn(item);
                }).join('');
            });

            Handlebars.registerHelper('makeCell', function(index, options) {
                return '<td class="grid-cell index_' + index + '">' + options.fn(this) + '</td>';
            });

            Handlebars.registerHelper('emailLink', function(email) {
                //email = Handlebars.Utils.escapeExpression(email);
                return new Handlebars.SafeString('<a href="mailto:' + email + '">' + email + '</a>');

                //if instead it would be called {{#emailLink}}{{mail}}{{/emailLink}} it could look like this
                // email = email.fn(this);
                // return new Handlebars.SafeString('<a href="mailto:' + email + '">' + email + '</a>');
            });

            var data = { people: inputData };
            var compiledTemplate = Handlebars.compile(templateHandleBars);
            return compiledTemplate(data);
        }

        function getItems() {
            return [
                {
                    name: "Paweł",
                    surname: "Olesiejuk",
                    mail: "pawel.olesiejuk",
                    currency: "60 EUR",
                    date: "25.07.2013 16:00"
                },
                {
                    name: "Paulina",
                    surname: "Żmijewska",
                    mail: "paulina.zmijewska@goyello.com",
                    currency: "60 EUR",
                    date: "01.08.2013 16:30"
                }];
        }

        $(".awesome-grid-table").awesomeGrid({
            useTemplates: true,
            templateFunction: stacheTemplating,
            //getItems: getItems
        });
    });