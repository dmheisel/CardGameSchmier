const tallyScore = ( players ) => {
	let points = [ 'High', 'Low', 'Jick', 'Jack', 'Game' ];
	for ( let player of players ) {
		if ( player.hasLowCard ) {
			player.incrementScore();
			console.log( `${player.name} gets one point for Low Card.` );
			player.toggleHasLowCard()
		};
		if ( player.hasHighCard ) {
			player.incrementScore();
			console.log( `${player.name} gets one point for High Card.` );
			player.toggleHasHighCard();
		};
		for ( let card of player.takenCards ) {
			if ( card.isJick ) {
				player.incrementScore();
				console.log( `${player.name} gets one point for taking the Jick.` );
			};
			if ( card.name.includes( 'Jack' ) && card.isTrump ) {
				player.incrementScore();
				console.log( `${player.name} gets one point for taking the Jack.` );

			};
		};
	};
	const tallyGamePoint = ( players ) => {
		//const getPoints = ( player ) => {
		const countGamePoints = ( player ) => {
			return player.takenCards.reduce( ( a, b ) => a.gamePointValue + b.gamePointValue, 0 );
		};
		let sortedPlayersArr = players.sort( ( x ) => countGamePoints( x ) );
		let winner = sortedPlayersArr[ 0 ];
		winner.incrementScore();
		console.log( `${winner.name} gets one point for game.` );
	};
	tallyGamePoint( players );
};