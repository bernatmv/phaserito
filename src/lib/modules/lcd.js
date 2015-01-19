import {
	Utils
}
from './utils.js';

export class LCD extends Phaser.Group {
	constructor(game, parent, config, amount = 0) {
		super(game, parent, "lcd");
		this.classType = Phaser.Text;
		config = config || {};
		this.x = config.x || 0;
		this.y = config.y || 0;
		this.digits = config.digits || 9;
		this.decimals = config.decimals || 0;
		this.styleBg = config.styleBg || {
			font: "36px DS-Digital",
			fill: "rgba(0, 141, 187, .25)",
			align: "right"
		};
		this.styleFg = config.styleFg || {
			font: "36px DS-Digital",
			fill: "rgba(0, 192, 255, 1)",
			align: "right"
		};

		this.bgDigits = this.create(0, 0, this.format(888888888888), this.styleBg);
		this.fgDigits = this.create(0, 0, "0", this.styleFg);

		this.bgDigits.anchor.x = 1;
		this.fgDigits.anchor.x = 1;

		this.animationTween = this.game.add.tween(this);
		this.animationTween.onUpdateCallback(() => this.fgDigits.setText(this.format(this.amount)), this);

		this.setAmount(amount);
	}

	setAmount(amount = 0, tween) {
		this.animationTween.stop();
		if (!tween) {
			this.amount = amount;
			this.fgDigits.setText(this.format(amount));
		} else {
			this.animationTween.to({
				amount: amount
			}, 1000, Phaser.Easing.Quadratic.In, true);
		}
	}

	format(amount) {
		var numbers = Utils.floatToCurrency(amount, this.decimals, false);
		var maxLength = this.digits + Math.floor((this.digits - 1) / 3);
		numbers = numbers.substr(((numbers.length > maxLength) ? numbers.length : maxLength) - maxLength);
		return numbers.replace(/1/g, " 1");
	}
}
