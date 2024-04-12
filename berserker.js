class Berserker extends Character {
  constructor (name, hp = 8, mana = 0, dmg = 4) {
    super(name, hp, mana, dmg);
    this.atkSpeManaCost = 0;
  }

  atkSpe() {
    this.hp -=1;
    this.dmg++;
  }
}