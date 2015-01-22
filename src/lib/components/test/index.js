export class Test {
	constructor() {
		this.load = {
			sprites: require('./config/sprites')
		}
		console.log("TEST COMPONENT LOADED!");
		console.log(this.load.sprites('default', 'en'));
	}
}
