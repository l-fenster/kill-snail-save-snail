class Defence {
  constructor(defence, attack, gameInstance, livesAndTimes) {
    this.defence = defence;
    this.attack = attack;
    this.gameInstance = gameInstance;
    this.livesAndTimes = livesAndTimes;
  }

  checkDefence(submittedDefence) {
    if (this.defence === submittedDefence) {
      this.gameInstance.moveToNextAttack();
      console.log(true);
    } else {
      this.livesAndTimes.decrementLives();
      this.gameInstance.moveToNextAttack();
      console.log(false);
    }
  }
}
