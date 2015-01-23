

export class Play extends Phaser.State {
	preload() {
	}
	create() {
		// Game begins
		var test = this.game.component.get("test")
		test.addBrunaAt(this.game.world.centerX, this.game.world.centerY);
	}
}
