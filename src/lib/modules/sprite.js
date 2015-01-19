export class Sprite extends Phaser.Sprite {
	constructor(game, x, y, key, frame) {
		super(game, x, y, key, frame);
		if (this.game.config.phasersito.animations[key] !== undefined) {
			let spriteAnimations = game.config.phasersito.animations[key];
			for (let i = 0, l = spriteAnimations.length; i < l; i++){
				let { name, frames, frameRate, speed = game.config.phasersito.game.defaultAnimationSpeed, loop, useNumericIndex } = spriteAnimations[i];
				this.animations.add(name, frames, frameRate || (frames.length * speed), loop, useNumericIndex);
			}
		}
	}

	playAnimation(name) {
		return new Promise((resolve, reject) => {
			var animation = this.animations.play(name);
			if (animation) {
				animation.onComplete.addOnce(() => {
					resolve();
				}, this);
			} else {
				resolve();
			}
		});
	}

	stopAnimation() {
		if (this.animations.currentAnim && this.animations.currentAnim.isPlaying)
			this.animations.currentAnim.stop(true, true);
	}
}
