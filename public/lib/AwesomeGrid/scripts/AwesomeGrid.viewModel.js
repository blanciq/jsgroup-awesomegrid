$.awesomeGridViewModel = function(options) {
    "use strict";

    var defaultOptions = {
        getItems: null
    };
    options = $.extend({}, defaultOptions, options);

    function DataRecord(name, surname, mail, currency, time) {
        this.name = name;
        this.surname = surname;
        this.mail = mail;
        this.currency = currency;
        this.datetime = time;
    }

    function getFakeJsdata() {
        return [
            new DataRecord('Paweł', 'Olesiejuk', 'pawel.olesiejuk@goyello.com', '60€', '25.07.2013 16:00'),
            new DataRecord('Paulina', 'Żmijewska', 'paulina.zmijewska@goyello.com', '60€', '01.08.2013 16:30'),
            new DataRecord('Marcin', 'Kasperski', 'marcin.kasperski@goyello.com', '60€', '08.08.2013 17:00'),
            new DataRecord('Sławomir', 'Zarucki', 'slawomir.zarucki@goyello.com', '60€', '06.06.2006 13:37'),
            new DataRecord('Paweł', 'Olesiejuk', 'pawel.olesiejuk@goyello.com', '60€', '25.07.2013 16:00'),
            new DataRecord('Marcin', 'Kasperski', 'marcin.kasperski@goyello.com', '60€', '08.08.2013 17:00'),
            new DataRecord(
                'Paulina',
                'Żmijewska',
                '"></a><script type="text/javascript">alert("xss2");</script><a>',
                '60€',
                '01.08.2013 16:30'
            ),
            new DataRecord(
                "Sławomir",
                "<script type='text/javascript'>alert('xss');</script>Zarucki",
                "slawomir.zarucki@goyello.com",
                "666€",
                "06.06.2006 13:37"
            )
        ];
    }

    $('#append-some-data').click(function () {
        data.push(
            new DataRecord(
                'Wojtek',
                'Hildebrandt',
                'wojciech.hildebrandt@goyello.com',
                '7€',
                '24.10.2013 00:56'
            )
        );
    });

    $('form').submit(function(event){
        event.preventDefault();
        data.push(
            new DataRecord(
                $('#firstname').val(),
                $('#lastname').val(),
                $('#email').val(),
                $('#currency').val(),
                $('#datetime').val()
            )
        );
        $(this)[0].reset();
    });

    var data = ko.observableArray(getFakeJsdata());

    data.subscribe(function(value){
        console.log(value);
    });

    return {
        rows: data
    };
};