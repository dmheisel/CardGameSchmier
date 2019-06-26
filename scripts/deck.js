const Card = require('./card.js')

class Deck {
	constructor() {
		this.cards = [];
		this.suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
		this.names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack',
			'Queen', 'King', 'Ace'];
		this.build();
	};

	build() {
		//builds a deck of cards from suits & names, ace high
		for (let i = 0; i < this.suits.length; i++) {
			let suit = this.suits[i]
			let val = 2
			for (let n = 0; n < this.names.length; n++) {
				let card = new Card(this.names[n], suit, val);
				val++;
				this.cards.push(card);

			};
		};
	};
	shuffle() {
		/*shuffles deck of cards to random order using fisher-yates method
		loops through starting from end and swaps that card with a random card in
    the deck, repeating for every card from last to first.*/

		for (let i = this.cards.length - 1; i > 0; i++) {
			let randIndex = Math.floor(Math.random() * i);
			let temp = this.cards[i];
			//saves last card as temp variable
			this.cards[i] = this.cards[randIndex];
			//swaps last card with card from a random Index of deck
			this.cards[randIndex] = temp;
			//puts the saved last card in place of the random indexed card.
		};
	};
	deal() {
		//deals out the top card from the deck.
		return this.cards.pop()
	}
};

module.exports = Deck;