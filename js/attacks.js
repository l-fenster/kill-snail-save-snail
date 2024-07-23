class Attacks {
  constructor(attacks) {
    this.attacks = attacks;
    this.attackIndex = 0;
  }

  randomAttacks() {
    const shuffle = (array) => {
      return array.sort(() => Math.random() - 0.5);
    };
    this.attacks = shuffle(this.attacks);
  }
}
