

export class Play extends Phaser.State {
	preload() {
	}
	create() {
		// Game begins
		var soundManager = this.game.component.get("soundDirector")
			.addManager({x: 10, y: this.game.world.centerY})
			.addManager({type: 'music', x: 10, y: this.game.world.centerY + 60})
			.setMusic({laps: ['example1']})
//			.playMusic()
			.addMuteButton({type: 'fx', x: 100, y: 10})
			.addMuteButton({type: 'music', x: 180, y: 10});
	}
}
