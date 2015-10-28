var deck = buildDeck();

function buildDeck() {
    var suits = ["C", "D", "S", "H"];
    var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    var deck = [];
    const numberOfDecks = 2

    var deckCount = 0
    while (deckCount < numberOfDecks) {
        for (i = 0; i < suits.length; i++) {
            for (j = 0; j < values.length; j++) {
                deck.push([suits[i], values[j]]);
            }
        }
        deckCount++
    };
    return deck
};