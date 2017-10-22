var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png",
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png",
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png",
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png",
}
];

var cardsInPlay = [];

cardsInPlay.push('cards[cardId].rank');

var checkForMatch = function() {
document.getElementsById('cards').setAttribute(cards[cardId].cardImage);
if (cardsInPlay.length === 2) {
if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
} else {
	console.log("Sorry, try again.");
}
}
};

var flipCard = function (){
	this.getAttribute(data-id);
	var cardId = this.getAttribute(data-id).value;
	console.log("User flipped " + cards[cardId].rank);
	console.log("User flipped" + cards[cardId].image);
	console.log("User flipped" + cards[cardId].suit);
	checkForMatch();

// if (cardsInPlay.length === 2) {
// 	if (cardsInPlay[0] === cardsInPlay[1]){
// 		alert("You found a match!");
// 	} else if (cardsInPlay[0] !== cardsInPlay[1]){
// 		alert("Sorry, try again");
// 	}
// }
};

var createBoard = function(){
	for (var i = 0; i < cards.length; i++){
	var cardElement = document.createElement(img);
	document.getElementsById('game-board').setAttribute('src', "images/back.png");
	document.getElementsById('game-board').setAttribute('data-id', i);
	document.getElementsById('cardElement').addEventListener('click', flipCard);
	document.getElementsById('game-board').appendChild('cardElement');

	}
};

createBoard();





