const Player = require('../objects/player');
const Card = require('../objects/card');
const Deck = require('../objects/deck');

const deck = new Deck();

//players created for testing
let playerNames = ['testPlayer1', 'testPlayer2', 'testPlayer3', 'testPlayer4'];
let playerList = [];

for (let name of playerNames) {
	playerList.push(new Player(name));
}

//simulates dealing -- todo need to flesh out dealing and bidding later
for (let i = 0; i < 9; i++) {
	for (let player of playerList) {
		player.drawCard(deck);
	}
}

// let trumpSuit = 'Spades';
// for (let player of playerList) {
// 	for (let card of player.hand) {
// 		if (card.suit === trumpSuit && card.name.includes('Ace')) {
// 			card.toggleTrump();
// 			player.toggleHasHighCard();
// 		} else if (card.suit === trumpSuit && card.name.includes('6')) {
// 			card.toggleTrump();
// 			player.toggleHasLowCard();
// 		} else if (card.suit === trumpSuit) {
// 			card.toggleTrump();
// 		} else if (card.color === 'Black' && card.name.includes('Jack')) {
// 			card.toggleJick();
// 			card.toggleTrump();
// 		}
// 	}
// }
//end of testing code

const round = index => {
	const trick = startingIndex => {
		/*a trick is one round of play.  First trick starts with winner of bidding
	round, following tricks start with winner of previous trick.
	During play, all players play one card.  Players must follow suit of the
	first card led if possible, or may play a trump card at any time.
	Highest card in the led suit wins the trick, with trump cards all counted as
	higher than any card in led suit.*/

		let offset = startingIndex;
		//offset for determining first player in round
		let playedCards = [];
		//empty array used to contain list of all cards played in trick

		let trickSuit;
		//suit of leading card in the trick.  used for determining winner if no trump.

		for (let i = 0; i < playerList.length; i++) {
			let pointer = (i + offset) % playerList.length;
			let currentPlayer = playerList[pointer];
			//pointer points to starting player

			//here will be code to ask each player to play a card for the trick
			//now using random to pull random card from each players _hand
			let randIndex = Math.floor(Math.random * currentPlayer.hand.length);
			chosenCard = currentPlayer.playCard(randIndex);
			playedCards.push(chosenCard);

			//if player plays low in trump, toggles lowPoint for scoring later
			if (chosenCard.isTrump && chosenCard.value === 6) {
				console.log(`${currentPlayer.name} has played the low card.`);
			}

			//declares suit of trick (suit of card led)
			//trick suit can be trumped over but otherwise must be followed if possible
			if (i === 0) {
				trickSuit = playedCards[0].suit;
				console.log(`${trickSuit} was led.`);
			}
		}

		const determineWinner = cardsArr => {
			//function for determining which card & player took the trick
			let winningCard;
			//trump cards always beat other cards
			let trumpCards = cardsArr
				.filter(x => x.isTrump)
				.sort((a, b) => b.value - a.value);
			if (trumpCards.length > 0) {
				winningCard = trumpCards[0];
			} else {
				// only cards in same suit as leading card can take trick
				let trickSuitCards = cardsArr
					.filter(x => x.suit === trickSuit)
					.sort((a, b) => b.value - a.value);
				winningCard = trickSuitCards[0];
			}

			console.log(`${winningCard.name} took the trick.`);
			let winnerIndex =
				(offset + cardsArr.indexOf(winningCard)) % playerList.length;
			let trickWinner = playerList[winnerIndex];
			console.log(`${trickWinner.name} took the trick.`);
			return trickWinner;
		};
		let trickWinner = determineWinner(playedCards);
		for (let card of playedCards) {
			trickWinner.takenCards.push(card);
		}
		return playerList.indexOf(trickWinner);
	};

	while (playerList[0].hand.length > 0) {
		let nextRoundIndex = trick(index);
		round(nextRoundIndex);
	}
	return playerList;
};
