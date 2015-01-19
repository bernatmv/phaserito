import {Figure} from "./modules/figure";
import {LineNumbers} from "./modules/lineNumbers";
import {MessageBundles} from './config/lang/';
import {Reel} from "./modules/reel";
import {ReelsContainer} from "./modules/reelsContainer";
import {States} from './states/';
import {UI} from "./modules/ui";

class CasinoSlot extends Phasersito.Game {
	constructor({ config: gameConfig = {}, lang: gameLang = {}, states: gameStates = {}, minigames: minigames = {}}) {
		// Merge base and game config
		var config = Phasersito.Utils.deepExtend(require("./config/game.js"), gameConfig);

		// Merge base and game strings
		var lang = Phasersito.Utils.deepExtend(MessageBundles, gameLang);

		// Merge base and game states
		var states = Phasersito.Utils.deepExtend(CasinoSlot.States, gameStates);

		super({config, lang, states});

		// Set minigames, if any
		console.debug("using minigames:", minigames);
		this.minigames = minigames;
	}
}


CasinoSlot.Figure = Figure;
CasinoSlot.LineNumbers = LineNumbers;
CasinoSlot.Reel = Reel;
CasinoSlot.ReelsContainer = ReelsContainer;
CasinoSlot.UI = UI;
CasinoSlot.States = States;
Phasersito.CasinoSlot = CasinoSlot;
exports = module.exports = CasinoSlot
