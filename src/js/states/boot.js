export class Boot extends Phaser.State {
	preload() {
		this.game.load.image("loadingBackground", require("../assets/shared/loading-background.png"));
		this.game.load.image("slotLogo", require("../assets/shared/logo.png"));
		this.game.load.image("slotLogoBright", require("../assets/shared/logo-bright.png"));
	}
	create() {
		this.game.stage.disableVisibilityChange = true;
		this.game.input.maxPointers = 1;
		if (Phaser.Plugin.Debug){
			this.game.add.plugin(Phaser.Plugin.Debug);
		}
		this.game.state.start('Loading');
	}
};
