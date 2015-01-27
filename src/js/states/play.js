

export class Play extends Phaser.State {
	preload() {
	}
	create() {
		// Game begins
		var soundManager = this.game.component.get("soundManager")
			.addManager({x: 10, y: this.game.world.centerY})
			.addManager({type: 'music', x: 10, y: this.game.world.centerY + 60});
	}
}
