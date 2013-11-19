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
	
	$('#get-data').click(function(event) {
			$.get('http://localhost:8080/?file=osoby')
			.done(function(response) {
				var newData = [];
				$(JSON.parse(response)).each(function(index, item){
					newData.push(new DataRecord(
						item.name,
						item.surname,
						item.mail,
						item.currency,
						item.datetime
					));
				});
				data(newData);
			});
	});

	
	var formToObj = function (form){
		var obj = {};
		$(form).each(function(index, item){
			obj[item.name] = item.value;
		});
		return obj;
	}
    $('form').submit(function(event){
        event.preventDefault();
        var $form = $(this);
        $.ajax({
			url: 'http://localhost:8080/?file=osoby',
			type: 'POST',
			contentType: 'application/json',
			dataType: 'json',
			data: JSON.stringify(formToObj($form.serializeArray())),
			error: function(){
				for(var index in arguments){
					console.log(arguments[index]);
				}
			}
		});
        //this.reset();
    });

    var data = ko.observableArray(getFakeJsdata());

    return {
        rows: data
    };
};