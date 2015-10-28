var deck = new Deck();
deck.buildDeck();
var person = new Player();
var computer = new Player();
initialDeal();



function Deck() {
  this.cards = [];

  this.buildDeck = function() {
    var suits = ["C", "D", "S", "H"];
    var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    var deck = [];
    const numberOfDecks = 1;

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
};

function dealTo(player) {
    player.addCardToHand(deck.dealOneCard());
};

function initialDeal() {
    dealTo(person);
    dealTo(computer);
    dealTo(person);
    dealTo(computer);
};

console.log(person.hand);
console.log(computer.hand);
console.log(deck.cards.length)