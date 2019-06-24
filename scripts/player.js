class Player {
  constructor(name) {
    this._name = name;
    this.hand = [];
  };
  get name() {
    return this._name;
  };
  drawCard(card) {
    //adds card to hand
    this._hand(push(card));
  };
  playCard(cardIndex) {
    //pulls and returns card from hand
    card = this.hand.splice(cardIndex, 1);
    return card;
  };
}

module.exports = Player;