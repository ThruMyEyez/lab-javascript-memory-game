class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here
    if (!this.cards) return undefined;
    let t = [],
      n = this.cards.length,
      i;
    while (n) {
      // Pick a remaining element
      i = Math.floor(Math.random() * n--);
      //and move it to the new arraay
      //shuffled.push(this.cards.splice(i, 1)[0]); // for not in place shuffling.
      t = this.cards[n];
      this.cards[n] = this.cards[i];
      this.cards[i] = t;
    }
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    console.log("Exec checkIfPair");
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      this.pickedCards = [];
      return true;
    } else {
      this.pickedCards = [];
      return false;
    }
  }

  checkIfFinished() {
    // ... write your code here
    return this.cards.length / 2 === this.pairsGuessed;
  }
}
