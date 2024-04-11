class Monk extends Character {
  constructor (name, hp = 8, mana = 200, dmg = 2) {
    super(name, hp, mana, dmg);
    this.atkSpeManaCost = 25;
  }

  atkSpe() {
    if (this.mana >= 25) {
      this.mana -= 25;
      this.hp += 8;
    }
    else {
      console.log('Not enough mana');
    }
  }
}