import {States} from './states/';
import {MessageBundles} from '../config/lang/';

class LovelyDogGame extends Phaserito.Game {
	constructor({ config: gameConfig = {}, lang: gameLang = {} }) {
		// Merge base and game config
		var config = Phaserito.Utils.deepExtend(require("../config/game.js")(Phaserito.lang), gameConfig);

		// Merge base and game strings
		var lang = Phaserito.Utils.deepExtend(MessageBundles, gameLang);

		super({config, lang, LovelyDogGame.States});
	}
}

// includes Phaserito predefined states, changes states as needed
LovelyDogGame.States = States;
// we are saving a reference for future use
Phaserito.LovelyDogGame = LovelyDogGame;
/* exports = module.exports = LovelyDogGame */

// gets the index from src/ and deploys it at build/
require("file?name=/[name].[ext]!../index.html");
// the default CSS with the default fonts, change if you don't want to use any of Phaserito CSS
require('../lib/styles.less');

// when everything is loaded, start the game process
window.onload = () => new LovelyDogGame();
