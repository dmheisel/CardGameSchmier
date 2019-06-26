class Player {
	constructor(name) {
		this._name = name;
		this.hand = [];
		this.takenCards = [];
		this.hasLowPoint = false;
	};
	get name() {
		return this._name;
	};
	toggleLowPoint() {
		this.hasLowPoint = !this.hasLowPoint;
	}
	drawCard(source) {
		//adds card to hand
		this.hand.push(source.deal());
	};
	playCard(cardIndex) {
		//splice removes card at index from the hand array and
		//returns it
		let card = this.hand.splice(cardIndex, 1)[0];
		console.log(`${this.name} played ${card.name}`);
		return card;
	};
}

//module.exports = Player;