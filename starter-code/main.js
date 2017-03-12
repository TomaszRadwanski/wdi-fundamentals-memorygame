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

function createBoard() {
  for (var i=0; i<cards.length; i++) {
    var cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.setAttribute('data-card', cards[i]);
    cardElement.addEventListener('click', isTwoCards);
    gameBoard.appendChild(cardElement);
    gameBoard.appendChild(cardElement);
  }

}
function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='KOS.png'>"; 
	} else {
		this.innerHTML = "<img src='QOS.png'>"; 
	}
    if (cardsInPlay.length === 2) {
    	isMatch(cardsInPlay);
    	cardsInPlay = [];
    }
}

function isMatch(cards) {
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } 
  else {
    alert("Sorry, try again.");

  }
}
createBoard();
