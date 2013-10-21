$.awesomeGridViewModel = function(options) {
    "use strict";

    var defaultOptions = {
        getItems: null
    };
    options = $.extend({}, defaultOptions, options);

    var that = this;
    this.rows = new ko.observableArray([]);

    var createRow = function(rowData) {
        var self = this;

        this.name = ko.observable(rowData.name);
        this.surname = ko.observable(rowData.surname);
        this.mail = ko.observable(rowData.mail);
        this.currency = ko.observable(rowData.currency);
        this.date = ko.observable(rowData.sdas);
        //ko.mapping.fromJS(rowData, {}, this);

        this.fullName = ko.computed(function() {
            return self.name() + " " + self.surname();
        });
    };

    that.rows.push(new createRow({
        name: "Paweł",
        surname: "Olesiejuk",
        mail: "pawel.olesiejuk",
        currency: "60 EUR",
        date: "25.07.2013 16:00"
    }));
    that.rows.push(new createRow({
        name: "Paulina",
        surname: "Żmijewska",
        mail: "paulina.zmijewska@goyello.com",
        currency: "60 EUR",
        date: "01.08.2013 16:30"
    }));
    //if (options.getItems) {
    //    $.each(options.getItems(), function(index, item) {
    //        that.rows.push(new createRow(item));
    //    });
    //}
};