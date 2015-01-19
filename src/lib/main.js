/**
 * So the webpack includes the file for the pre-loading css animation
 */
//require("./styles.less");

import {API} from './modules/api';
import {Button} from './modules/button';
import {DialogService} from './modules/dialogService';
import {Game} from './modules/game';
import {I18n} from './modules/i18n';
import {LCD} from './modules/lcd';
import {Logo} from './modules/logo';
import {MessageBundles} from './config/lang/';
import {Sprite} from './modules/sprite';
import {States} from './states/';
import {Toggle} from './modules/toggle';
import {Utils} from './modules/utils';

var lang = Utils.getURLParameter("lang") || "en";
var config = require("./config/game")(lang);

exports = module.exports = {
	API,
	Button,
	config,
	DialogService,
	Game,
	I18n,
	lang,
	LCD,
	Logo,
	MessageBundles,
	Toggle,
	Sprite,
	States,
	Utils
};
