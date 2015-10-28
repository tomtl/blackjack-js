var deck = new Deck();
deck.buildDeck();
var person = new Player();
var computer = new Player();
initialDeal();
checkForBlackjack();

var cardValues = { 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10,
                        "J": 10, "Q": 10, "K": 10, "A": 11};

function Deck() {
  this.cards = [];

  this.buildDeck = function() {
    const suits = ["C", "D", "S", "H"];
    const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    const numberOfDecks = 1;
    var deck = [];


    var deckCount = 0
    while (deckCount < numberOfDecks) {
        for (i = 0; i < suits.length; i++) {
            for (j = 0; j < values.length; j++) {
                deck.push([suits[i], values[j]]);
            }
        }
        deckCount++;
    };
    this.cards = deck;
  };

  this.dealOneCard = function() {
    randomCardNumber = Math.floor(Math.random() * this.cards.length);
    dealtCard = this.cards[randomCardNumber];
    this.cards.splice(randomCardNumber, 1);
    return dealtCard;
  };
}

function Player() {
    this.hand = [];
    this.score = 0;

    this.addCardToHand = function(card) {
        this.hand.push(card);
    };

    this.calculateScore = function() {
        var score = 0
        var acesCount = 0

        for (i = 0; i < this.hand.length; i++) {
            var face = this.hand[i][1];
            if (face === "A") {
                acesCount++;
            };
            score += cardValues[face];
        };

        if (acesCount > 0 && score > 21) {
            while (score > 21 && acesCount > 0) {
                score -= 10;
                acesCount -= 1;
            }
        }

        this.score = score;
     }
};

function dealTo(player) {
    player.addCardToHand(deck.dealOneCard());
    player.calculateScore();
};


function initialDeal() {
  dealTo(person);
  dealTo(computer);
  dealTo(person);
  dealTo(computer);
};

function checkForBlackjack() {
    if (person.score  === 21) {
        console.log("You got 21. You win!");
    } else if (computer.score === 21) {
        console.log("Dealer got 21. You lose.");
    }
};

console.log("person: " + person.hand + " = " + person.score);
console.log("computer: " + computer.hand + " = " + computer.score);
console.log("cards in deck: " + deck.cards.length)
