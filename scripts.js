var memoryArray = [
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
var memoryValues = [];
var memoryTileIds = [];
var cardsFlipped = 0;
// All code will wait until the DOM is ready!
$(document).ready(function(){
Array.prototype.memoryCardShuffle = function(){
	var i = this.length, j, temp;
	while(--i > 0){
		j = Math.floor(Math.random() * (i + 1));
		temp = this[j];
		this[j] = this[i];
		this[i] = temp;
	}
}
function newBoard(){
	cardsFlipped = 0;
	var output = '';
	memoryArray.memoryCardShuffle();
	for(var i = 0; i < memoryArray.length; i++){
		output += 
	}
}

});
