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

            var data = { people: inputData };
            var compiledTemplate = Handlebars.compile(template);
            return compiledTemplate(data);
        }

        var handlebarsTemplateEngine = function () { };
        handlebarsTemplateEngine.prototype = ko.utils.extend(new ko.templateEngine(), {
            templates: {},
            renderTemplateSource: function (templateSource, bindingContext, options) {
                var data = bindingContext.$data,
                    templateId = templateSource.i.id,
                    templateText = templateSource.text(),
                    compiledTemplate = this.templates[templateId];

                // only compile the template once on the client
                if (compiledTemplate == null) {
                    compiledTemplate = Handlebars.compile(templateText);
                    this.templates[templateId] = compiledTemplate;
                }

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