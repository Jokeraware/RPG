class Assassin extends Character {
  constructor (name, hp = 6, mana = 20, dmg = 6) {
    super(name, hp, mana, dmg);
    this.atkSpeManaCost = 20;
  }

  atkSpe(victim) {
    if (this.mana >= 20) {
      victim.takeDamage(7);
      this.mana -= 20;
      if (victim.state !== 'Loser') {
        this.takeDamage(7);
      }
    }
    else {
      console.log('Not enough mana');
    }
  }
}