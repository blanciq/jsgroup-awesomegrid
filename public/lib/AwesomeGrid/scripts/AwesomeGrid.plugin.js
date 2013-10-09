$.fn.awesomeGrid = function(options) {
	"use strict";
        
	this.fadeOut('slow').fadeIn('slow');
	$('#get-data').click(function() {
		ajaxCall(1);
	});
	$('#get-data2').click(function() {
		ajaxCall(2);
	});
	
	function ajaxCall(x) {
		$.ajax({
			type : 'POST',
			url : '/ajax.php',
			data : {},
			success : function(data) {
				$('.grid-row').fadeIn();
				if (x == 1)
					parseData(data, '.grid-body');
				else if (x == 2)
					parseData2(data, '.grid-body');
			},
			error : function(data) {
				console.log('jest babol!');
			}
		});
		console.log(x);
	}
	
	function oddEvenRow(i) {
		var rowClass = '';
		if (i%2 == 0)
			rowClass = 'odd';
		else
			rowClass = 'even';
		return rowClass;
	}
	
	function firstLastRow(i, jsonLength) {
		var rowClass = '';
		if (i == 0)
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
	
	function parseData(data, element) {
		$(element).fadeOut('medium', function() {
			$(this).empty();
			var dataObj = $.parseJSON(data),
				jsonLength = dataObj.length,
				i = 0;
				
			for (i=0; i<jsonLength; i++) {
				var row = $('<tr />').addClass('grid-row');
				
				row.addClass('row-' + (i+1));
				row.addClass(oddEvenRow(i));
				row.addClass(firstLastRow(i, jsonLength));
				
				row.append(makeCell(1, dataObj[i].name));
				row.append(makeCell(2, dataObj[i].surname));
				row.append(makeCell(3, dataObj[i].mail));
				row.append(makeCell(4, dataObj[i].currency));
				row.append(makeCell(5, dataObj[i].datetime));
				
				$(this).append(row);
			}
			$(this).fadeIn();
		});
	}
	
	function parseData2(data, element) {
		$(element).fadeOut('medium', function() {
			var thisTable = $(this);
			thisTable.empty();
			var dataObj = $.parseJSON(data);
			
			$.each(dataObj, function(index) {
				var row = $('<tr />').addClass('grid-row');
				
				row.addClass('row-' + (index+1));
				row.addClass(oddEvenRow(index));
				row.addClass(firstLastRow(index, dataObj.length));
				
				row.append(makeCell(1, this.name));
				row.append(makeCell(2, this.surname));
				row.append(makeCell(3, this.mail));
				row.append(makeCell(4, this.currency));
				row.append(makeCell(5, this.datetime));
				
				thisTable.append(row);
			});
			thisTable.fadeIn();
		});
	}
};
