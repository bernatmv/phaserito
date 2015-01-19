export class Logo extends Phaser.Group {
	constructor(game, parent, config) {
		super(game, parent, "logo");

		this.slotLogo;
		this.brightSlotLogo;

		this.game.add.sprite(0, 0, 'loadingBackground', this)
		this.slotLogo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'slotLogo', this);
		this.slotLogo.anchor.x = .5;
		this.slotLogo.anchor.y = .5;
		this.slotLogo.alpha = 0;

		this.brightSlotLogo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'slotLogoBright', this);
		this.brightSlotLogo.anchor.x = .5;
		this.brightSlotLogo.anchor.y = .5;

		this.logoMask = this.game.add.graphics(this.game.world.centerX + 280, this.game.world.centerY, this);
		this.logoMask.beginFill(0xffffff);
		this.logoMask.lineStyle(10, 0xffffff, 1);
		this.logoMask.moveTo(-125, -150);
		this.logoMask.lineTo(-75, -150);
		this.logoMask.lineTo(125, 150);
		this.logoMask.lineTo(75, 150);
		this.logoMask.lineTo(-125, -150);
		this.logoMask.endFill();

		this.brightSlotLogo.mask = this.logoMask;
	}

	animate() {
		return new Promise((resolve, reject) => {
			var logoTween;
			logoTween = this.game.add.tween(this.slotLogo).to({alpha: 1}, 1500, Phaser.Easing.Quadratic.Out, true);
			logoTween.onComplete.add(() => {
				this.game.add.tween(this.logoMask).to({ x: this.game.world.centerX - 330}, 1200, Phaser.Easing.Quadratic.InOut, true, 1000, Number.MAX_VALUE).onLoop.add(resolve, this);
			}, this);
		});
	}
}
