

export class Play extends Phaser.State {
	preload() {
		this.game.load.spritesheet("arrow", this.game.config.phasersito.game.dev.arrow, 143, 70, 1, 0, 0);
	}
	create() {
		var reel;

		this.game.add.sprite(0, 0, 'background', this.world);

		this.reelsContainer = new Phasersito.CasinoSlot.ReelsContainer(this.game, this.world);

		this.lineNumbers = new Phasersito.CasinoSlot.LineNumbers(this.game, this.world);

		this.game.add.sprite(0, 0, 'foreground', this.world);

		this.ui = new Phasersito.CasinoSlot.UI(this.game, this.world);
	}
}
