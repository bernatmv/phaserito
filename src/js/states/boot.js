export class Boot extends Phaser.State {

	preload() {
		this.game.load.image("logo", require("../../assets/img/logo.png"));
		this.game.load.image("logoBright", require("../../assets/img/logo_bright.png"));
	}

	create() {
		this.game.stage.disableVisibilityChange = true;
		this.game.input.maxPointers = 1;
		if (Phaser.Plugin.Debug){
			this.game.add.plugin(Phaser.Plugin.Debug);
		}
		this.game.state.start('Loading');
	}

	init() {
		this.scale.scaleMode = Phaser.ScaleManager.NO_SCALE; 
//		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; 
		this.scale.setMinMax(320, 480, 640, 960);
		this.scale.pageAlignVertically = true; 
		this.scale.pageAlignHorizontally = true;
	}

};
