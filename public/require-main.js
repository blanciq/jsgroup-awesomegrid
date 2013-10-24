define(
    ["jquery", "handlebars", "text!lib/Templates/gridRowHandlebars.html", "awesomeGrid"],
    function($, bars, template ) {
        "use strict";

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

            var data = { people: inputData.rows() };
            var compiledTemplate = Handlebars.compile(template);
            return compiledTemplate(data);
        }

        var handlebarsTemplateEngine = function () { };
        handlebarsTemplateEngine.prototype = ko.utils.extend(new ko.templateEngine(), {
            templates: {'rows': handlebarTemplating},
            makeTemplateSource: function(template, templateDocument){
                return template
            },
            renderTemplateSource: function (templateId, bindingContext, options) {
                var data = bindingContext.$data,
                    compiledTemplate = this.templates[templateId];

                return ko.utils.parseHtmlFragment(compiledTemplate(data));
            },
            allowTemplateRewriting: false
        });

        ko.setTemplateEngine(new handlebarsTemplateEngine());

        $(".awesome-grid-table").awesomeGrid({
            useTemplates: true,
            templateFunction: handlebarTemplating
        });
    });