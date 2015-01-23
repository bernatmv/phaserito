import {States} from './states/';
import {MessageBundles} from '../config/lang/';

class LovelyDogGame extends Phaserito.Game {
	constructor() {
		// the default language tags of the game
		var lang = MessageBundles;
		// the config of the game
		var config = require("../config/game.js")(Phaserito.lang);
		// the states of the game
		var states = States;

		super({config, lang, states});
	}
}


/**
 *	This will set the layout for the game and initiate it
 */


// we are saving a reference for future use
Phaserito.LovelyDogGame = LovelyDogGame;

// the default CSS with the default fonts, change if you don't want to use any of Phaserito CSS
require('../lib/styles.less');

// when everything is loaded, start the game process
window.onload = () => new LovelyDogGame();
