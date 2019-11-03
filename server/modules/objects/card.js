class Card {
	constructor( name, suit, value ) {
		this._name = name;
		this._suit = suit;
		this._value = value;
		this._gamePointValue = 0;
		this.isTrump = false;
		this.isJick = false;
		this.determineGamePointValue()
		// adds value as cards are constructed based on name

	};
	get name() {
		if ( this.isJick ) {
			return 'Jick';
		} else {
			return `${this._name} of ${this._suit}`;
		};
	};
	get suit() {
		return this._suit;
	};
	get value() {
		return this._value;
	};
	set gamePointValue( val ) {
		this._gamePointValue = val;
	};
	get gamePointValue() {
		return this._gamePointValue;
	}
	get color() {
		if ( this.suit === 'Spades' || this.suit === 'Clubs' ) {
			return 'Black';
		} else {
			return 'Red';
		};
	};
	toggleTrump() {
		this.isTrump = !this.isTrump;
	};
	toggleJick() {
		this.isJick = !this.isJick;
	};
	determineGamePointValue() {
		/*
		in schmier, cards have a 'gamepoint' value for determining game point
		10's are worth 10, Jacks 1, Queens 2, Kings 3, Aces 4
		Needed for counting up earned points at end of trick.
		Player who earns the most points gets 1 point for "game"
		*/
		switch ( this._name ) {
		case '10':
			this.gamePointValue = 10;
			break;
		case 'Jack':
			this.gamePointValue = 1;
			break;
		case 'Queen':
			this.gamePointValue = 2;
			break;
		case 'King':
			this.gamePointValue = 3;
			break;
		case 'Ace':
			this.gamePointValue = 4;
			break;
		default:
			this.gamePointValue = 0;
			break;
		};
	};
};

module.exports = Card;
