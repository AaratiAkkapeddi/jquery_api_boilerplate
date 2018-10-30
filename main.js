

var url;


var runSearch = function(){
	$.getJSON( url, function( data ) {
		if(data.query.search){
		  $('.results').empty()
		  var results = data.query.search
		  for (var i = 0; i <= results.length - 1; i++) {
		  	var title = results[i]['title']
		  	var description = results[i]['snippet']
		  	var currenthtml = $('.results').html()
		  	$('.results').html(currenthtml + '<h1>'+ title + '</h1><p>' + description + '</p>')
		  }
		} else {
			$('.results').html('no results')
		}

	});
}

$('button').on('click', function(){
	url = 'http://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&list=search&srsearch=' + $('input').val()
	runSearch()
})





