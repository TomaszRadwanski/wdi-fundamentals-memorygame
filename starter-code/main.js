/*
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
*/
/*
if (cardTwo === cardFour) {
alert('Sorry, try again.')
} else if (cardOne === cardTwo) {
alert('You found a match!')
} else if (cardThree === cardFour) {
}
*/

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var gameBoard = document.getElementById('game-Board');

function createCards() {
for (var i=0; i<cards.length; i++){
    var cardElement = document.createElement('div');
     cardElement.className = 'card';
     gameBoard.appendChild(cardElement);
    }
}
createCards();
