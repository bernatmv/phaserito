﻿module.exports = function (lang) {
	return {
		"effects": {
			data: require("!!file?name=[path][name].[ext]?[hash]!./effects.json"),
			urls: [
				require("../../assets/shared/effects.ac3"),
				require("../../assets/shared/effects.m4a"),
				require("../../assets/shared/effects.mp3"),
				require("../../assets/shared/effects.ogg")
			],
		},
		"music": {
			data: require("!!file?name=[path][name].[ext]?[hash]!./music.json"),
			urls: [
				require("../../assets/shared/music.ac3"),
				require("../../assets/shared/music.m4a"),
				require("../../assets/shared/music.mp3"),
				require("../../assets/shared/music.ogg")
			],
		},
	};
};
