const Card = require('./card.js')

class Deck {
    constructor() {
        this.cards = [];
        this.suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
        this.names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
        this.build();
    };

    build(){
        //builds a deck of cards from suits & names, ace high
        for (let i=0; i < this.suits.length; i++) {
            let suit = this.suits[i]
            let val = 2
            for (let n=0; n < this.names.length; n++){
                let card = new Card(this.names[n], suit, val);
                val++;
                this.cards.push(card);

            };
        };
    };
};

module.exports = Deck;
