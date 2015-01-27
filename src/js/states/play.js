

export class Play extends Phaser.State {
	preload() {
	}
	create() {
		// Game begins
		var soundManager = this.game.component.get("soundManager").test(this.game.world.centerX, this.game.world.centerY);
	}
}
