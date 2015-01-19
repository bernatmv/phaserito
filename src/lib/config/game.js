import {Utils} from '../modules/utils';﻿

var _ENV = Utils.getURLParameter("env");
var _HOST = window.location.hostname;

module.exports = function (lang) {
	return {
		game: {
			defaultAnimationSpeed: 1.5,
			canvas:{
				height: 480,
				width: 320
			}
		},

		atlases: require("./atlases/index.js")(lang),
		//audiosprites: require("./audiosprites/index.js")(lang),
		sprites: require("./sprites.js")(lang),
		//spritesheets: require("./spritesheets.js")(lang),
		//sounds: require("./sounds.js")(lang),
	};
};

