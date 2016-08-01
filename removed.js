// 	var gridSize = 16;
// 	var mgHTML = '';
// 	var cardCounter = 0;
// 	for(var i = 0; i < gridSize; i++){
// 		if(i < 8){
// 			card = cards[0];
// 		}
// 		else{
// 			card = cards[1];
// 		}
// 		mgHTML += '<div class="mg-tile col-sm-2">';
// 			mgHTML += '<div class="mg-tile-inner">';
// 				mgHTML += '<div class="mg-front">'+card+'</div>';
// 				mgHTML += '<div class="mg-back"></div>';
// 			mgHTML += '</div>';
// 		mgHTML += '</div>';
// 	}
// 	$('.mg-contents').html(mgHTML);
// 	$('.mg-tile-inner').click(function(){
//             $(this).toggleClass('flip');
//             var cardsUp = $('.mg-tile-inner.flip');
//             if(cardsUp.length == 2){
//             	//check to see if they match
//             	console.log(cardsUp.find('img')[0]);
//        			if(cardsUp.find('img')[0].src == cardsUp.find('img')[1].src){
//        			//the pics are the same, therefore it's a match
//        			cardsUp.addClass('matched');
//        			}else{
//        			//the pics are different, therefore it is NOT a match
//        			setTimeout(function(){
//        			cardsUp.removeClass('flip');
//        			},700)
//        		}
//     	}
// 	});
