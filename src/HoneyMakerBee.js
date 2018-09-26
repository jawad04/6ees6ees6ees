class HoneyMakerBee extends Bee{
  // TODO..
  constructor (color) {
  	super(color)
  	this.age = 10;
  	this.job = 'make honey'
  	this.honeyPot = 0;
  }
  makeHoney() {
  	this.honeyPot++;
  }
  giveHoney() {
  	this.honeyPot--;
  }
};
