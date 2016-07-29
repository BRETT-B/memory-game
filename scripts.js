var cards = [
	'<img src="images/angels.png">',
	'<img src="images/astros.png">',
	'<img src="images/athletics.png">',
	'<img src="images/bluejays.png">',
	'<img src="images/braves.png">',
	'<img src="images/brewers.png">',
	'<img src="images/cardinals.png">',
	'<img src="images/cubs.png">',
	'<img src="images/diamondbacks.png">',
	'<img src="images/dodgers.png">',
	'<img src="images/giants.png">',
	'<img src="images/indians.png">',
	'<img src="images/mariners.png">',
	'<img src="images/marlins.png">',
	'<img src="images/mets.png">',
	'<img src="images/nationals.png">',
	'<img src="images/orioles.png">',
	'<img src="images/padres.png">',
	'<img src="images/phillies.png">',
	'<img src="images/pirates.png">',
	'<img src="images/rangers.png">',
	'<img src="images/rays.png">',
	'<img src="images/reds.png">',
	'<img src="images/redsox.png">',
	'<img src="images/rockies.png">',
	'<img src="images/royals.png">',
	'<img src="images/tigers.png">',
	'<img src="images/twins.png">',
	'<img src="images/whitesox.png">',
	'<img src="images/yankees.png">',
];
// All code will wait until the DOM is ready!
$(document).ready(function(){
	var gridSize = 16;
	var mgHTML = '';
	var cardCounter = 0;
	for(var i = 0; i < gridSize; i++){
		if(i < 8){
			card = cards[0];
		}
		else{
			card = cards[1];
		}
		mgHTML += '<div class="mg-tile col-sm-2">';
			mgHTML += '<div class="mg-tile-inner">';
				mgHTML += '<div class="mg-front">'+card+'</div>';
				mgHTML += '<div class="mg-back"></div>';
			mgHTML += '</div>';
		mgHTML += '</div>';
	}
	$('.mg-contents').html(mgHTML);
	$('.mg-tile-inner').click(function(){
            $(this).toggleClass('flip');
            var cardsUp = $('.mg-tile-inner.flip');
            if(cardsUp.length == 2){
            	//check to see if they match
            	console.log(cardsUp.find('img')[0]);
       			if(cardsUp.find('img')[0].src == cardsUp.find('img')[1].src){
       			//the pics are the same, therefore it's a match
       			cardsUp.addClass('matched');
       			}else{
       			//the pics are different, therefore it is NOT a match
       			setTimeout(function(){
       			cardsUp.removeClass('flip');
       			},700)
       		}
    	}
	});
});
