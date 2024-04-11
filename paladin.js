class Paladin extends Character {
  constructor (name, hp = 16, mana = 160, dmg = 3) {
    super(name, hp, mana, dmg);
    this.atkSpeManaCost = 40;
  }

  atkSpe(victim) {
    if (this.mana >= 40) {
      victim.takeDamage(4)
      this.mana -= 40;
      this.hp += 5;
    }
    else {
      console.log('Not enough mana');
    }
  }
}