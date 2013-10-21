$.fn.awesomeGrid = function(options) {
	"use strict";

    var defaultOptions = { 
        useTemplates: false,
        templateFunction: null
    };
    options = $.extend({}, defaultOptions, options); 
        
	this.fadeOut('slow').fadeIn('slow');
	$('#get-data').click(function() {
		ajaxCall(1);
	});
	$('#get-data2').click(function() {
		ajaxCall(2, true);
	});
	
	function ajaxCall(x, fake) {
        if (fake) {
            $('.grid-row').fadeIn();
            var fakeData = getFakeJsdata();
            if (x == 1)
                appendDataToTable(fakeData, '.grid-body');
            else if (x == 2)
                appendDataToTable2(fakeData, '.grid-body');
            return;
        }

		$.ajax({
			type : 'POST',
			url : 'http://localhost:8888?file=osoby',
			data : {},
			success : function(data) {
				$('.grid-row').fadeIn();
                var parsedData = JSON.parse(data);
				if (x == 1)
					appendDataToTable(parsedData, '.grid-body');
				else if (x == 2)
					appendDataToTable2(parsedData, '.grid-body');
			},
			error : function(data) {
				console.log('jest babol!');
			}
		});
	}
	
	function oddEvenRow(i) {
		var rowClass = '';
		if (i % 2 === 0)
			rowClass = 'odd';
		else
			rowClass = 'even';
		return rowClass;
	}
	
	function firstLastRow(i, jsonLength) {
		var rowClass = '';
		if (i === 0)
			rowClass = 'first-row';
		else if (i == (jsonLength-1))
			rowClass = 'last-row';
		return rowClass;
	}
	
	function makeCell(number, text) {
		var cell = $('<td>').addClass('grid-cell');
		cell.addClass('index_' + number);
		cell.text(text);
		return cell;
	}
	
	function appendDataToTable(data, element) {
		$(element).fadeOut('medium', function() {
			$(this).empty();

			var recordCount = data.length,
				i = 0;
            
            if (options.useTemplates) {
                var html = options.templateFunction(data);
                $(this).append(html);

            } else {
                for (i = 0; i < recordCount; i++) {
                    var $rowHtml = getHtmlForRow(data[i], i, recordCount);
                    $(this).append($rowHtml);
                }
            }

			$(this).fadeIn();
		});
	}
	
	function appendDataToTable2(data, element) {
		$(element).fadeOut('medium', function() {
			var thisTable = $(this);
			thisTable.empty();
			
            if (options.useTemplates) {
                var html = options.templateFunction(data);
                $(this).append(html);

            } else {
                $.each(data, function(index) {
                    var $rowHtml = getHtmlForRow(this, index, data.length);
                    thisTable.append($rowHtml);
                });
            }

			thisTable.fadeIn();
		});
	}

    function getHtmlForRow(rowData, rowIndex, rowCount) {
        var $row = $('<tr />').addClass('grid-row');
        
        $row.addClass('row-' + (rowIndex + 1));
        $row.addClass(oddEvenRow(rowIndex));
        $row.addClass(firstLastRow(rowIndex, rowCount));
        
        $row.append(makeCell(1, rowData.name));
        $row.append(makeCell(2, rowData.surname));
        $row.append(makeCell(3, rowData.mail));
        $row.append(makeCell(4, rowData.currency));
        $row.append(makeCell(5, rowData.datetime));

        return $row;
    }

    function getFakeJsdata(x) {
        function DataRecord(name, surname, mail, currency, time) {
            this.name = name;
            this.surname = surname;
            this.mail = mail;
            this.currency = currency;
            this.datetime = time;
        }

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
    
    ko.applyBindings(new $.awesomeGridViewModel(options), this[0]);
};
