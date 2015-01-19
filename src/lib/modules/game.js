import {I18n} from './i18n';
import {MessageBundles} from '../config/lang/';
import {States} from '../states/';
import {Utils} from './utils';

export class Game extends Phaser.Game {
	constructor({ config: gameConfig = {}, lang: gameLang = {}, states: gameStates = {} }) {
		var locale = Utils.getURLParameter("lang") || "en";

		// Merge base and game strings
		var lang = Utils.deepExtend(MessageBundles, gameLang);
		console.debug("using lang:", lang);

		// Merge base and game config
		var config = Utils.deepExtend(require("../config/game")(locale), gameConfig);
		console.debug("using config:", config);

		// Instantiate game and add config
		super(config.game.canvas.width, config.game.canvas.height, Phaser.AUTO, 'content');
		this.config.phasersito = config

		// Instantiate translator
		this.i18n = I18n({ locale, messageBundles: lang});

		// Register states
		var states = Utils.deepExtend(States, gameStates);
		console.debug("loaded states:", states);

		for (let state in states) {
			this.state.add(state, states[state]);
		}

		this.state.start('Boot');
	}
}
