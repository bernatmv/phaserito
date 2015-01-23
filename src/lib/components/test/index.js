import {Utils} from "../../modules/utils";

export class Test {
	constructor({ game: game = {}, locale: locale = 'en', theme: theme = 'default' }) {
		this.game = game;
		this.locale = locale;
		this.theme = theme;
		// get config and merge with general config
		this.config = require('./config/component')(this.theme, this.locale);
		this.game.config.phaserito = Utils.deepExtend(this.game.config.phaserito, this.config);
	}

	addBrunaAt(posX, posY) {
		this.bruna = this.game.add.sprite(posX, posY, 'bruna');
		this.bruna.anchor.x = .5;
		this.bruna.anchor.y = .5;
	}
}
