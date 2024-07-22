class Attacks {
  constructor(attacks) {
    this.attacks = attacks;
  }

  randomAttacks() {
    const shuffle = (array) => {
      return array.sort(() => Math.random() - 0.5);
    };
    this.attacks = shuffle(this.attacks);
  }
}
