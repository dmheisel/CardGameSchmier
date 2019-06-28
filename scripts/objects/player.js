class Player {
	constructor( name ) {
		this._name = name;
		this._totalScore = 0;
		this.hand = [];
		this.takenCards = [];
		this.hasLowCard = false;
		this.hasHighCard = false;

	};
	get name() {
		return this._name;
	};
	get totalScore() {
		return this._totalScore;
	};
	set totalScore( num ) {
		this._totalScore = num;
	}
	incrementScore() {
		this._totalScore++;
		console.log( `${this.name}'s score is ${this.totalScore}` )
	}
	toggleHasLowCard() {
		this.hasLowCard = !this.hasLowCard;
	};
	toggleHasHighCard() {
		this.hasHighCard = !this.hasHighCard;
	}
	drawCard( source ) {
		//adds card to hand
		this.hand.push( source.deal() );
	};
	playCard( cardIndex ) {
		//splice removes card at index from the hand array and
		//returns it
		let card = this.hand.splice( cardIndex, 1 )[ 0 ];
		console.log( `${this.name} played ${card.name}` );
		return card;
	};
}

//module.exports = Player;