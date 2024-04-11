class Fighter extends Character {
  constructor (name, hp = 12, mana = 40, dmg = 4) {
    super(name, hp, mana, dmg);
    this.atkSpeManaCost = 20;
  }

  atkSpe(victim) {
    if (this.mana >= 20) {
      victim.takeDamage(5);
      this.mana -= 20;
    }
    else {
      console.log('Not enough mana');
    }
  }
}