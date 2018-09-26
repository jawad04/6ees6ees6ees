class ForagerBee extends Bee {
  // TODO..
  constructor(color) {
  	super(color)
  	this.age = 10;
  	this.job = 'find pollen';
  	this.canFly = true;
  	this.treasureChest = [];
  }
  forage(treasure) {
  	this.treasureChest.push(treasure);
  }
};
