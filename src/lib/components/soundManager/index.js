import {Sprite} from "../../modules/sprite";
import {Utils} from "../../modules/utils";

export class SoundManager {
	constructor({ game: game = {}, locale: locale = 'en', theme: theme = 'default' }) {
		this.game = game;
		this.locale = locale;
		this.theme = theme;
		// get config and merge with general config
		this.config = require('./config/component')(this.theme, this.locale);
		this.game.config.phaserito = Utils.deepExtend(this.game.config.phaserito, this.config);
	}

	test(posX, posY) {
		this.barMiddleBack = new Sprite(this.game, posX, posY, 'soundManager');
		//this.barMiddleBack = this.game.add.sprite(posX, posY, 'soundManager');
		this.barMiddleBack.anchor.x = .5;
		this.barMiddleBack.anchor.y = .5;
		//this.barMiddleBack.play('barMiddleFore');
		this.barMiddleFore = this.game.add.sprite(posX, posY+50, 'soundManager');
		this.barMiddleFore.anchor.x = .5;
		this.barMiddleFore.anchor.y = .5;
		this.barMiddleFore.play('barMiddleFore');
	}
}
