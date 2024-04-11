class Wizard extends Character {
  constructor (name, hp = 10, mana = 200, dmg = 2) {
    super(name, hp, mana, dmg);
    this.atkSpeManaCost = 25;
  }

  atkSpe(victim) {
    if (this.mana >= 25) {
      victim.takeDamage(7);
      this.mana -= 25;
    }
    else {
      console.log('Not enough mana');
    }
  }
}