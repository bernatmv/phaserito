module.exports = function (lang) {
	return {
		"buttons": {
			data: require("../../assets/" + lang + "/buttons.json"),
			format: Phaser.Loader.TEXTURE_ATLAS_JSON_ARRAY,
			url: require("../../assets/" + lang + "/buttons.png"),
		},
		"helpButtons": {
			data: require("./helpButtons.json"),
			format: Phaser.Loader.TEXTURE_ATLAS_JSON_ARRAY,
			url: require("../../assets/shared/helpButtons.png"),
		},
		"figures": {
			data: require("../../assets/shared/figures.json"),
			format: Phaser.Loader.TEXTURE_ATLAS_JSON_HASH,
			url: require("../../assets/shared/figures.png"),
		},
		"numbers": {
			data: require("../../assets/shared/numbers.json"),
			format: Phaser.Loader.TEXTURE_ATLAS_JSON_HASH,
			url: require("../../assets/shared/numbers.png"),
		},
		"minigame.sprites": {
			data: require("../../assets/shared/minigame/sprites.json"),
			format: Phaser.Loader.TEXTURE_ATLAS_JSON_HASH,
			url: require("../../assets/shared/minigame/sprites.png"),
		},
		"minigame.signs": {
			data: require("../../assets/" + lang + "/minigame/signs.json"),
			format: Phaser.Loader.TEXTURE_ATLAS_JSON_HASH,
			url: require("../../assets/" + lang + "/minigame/signs.png"),
		},
		"snowflakes_small": {
			data: require("../../assets/shared/snowflakes_small.json"),
			format: Phaser.Loader.TEXTURE_ATLAS_JSON_HASH,
			url: require("../../assets/shared/snowflakes_small.png"),
		},
		"snowflakes_big": {
			data: require("../../assets/shared/snowflakes_big.json"),
			format: Phaser.Loader.TEXTURE_ATLAS_JSON_HASH,
			url: require("../../assets/shared/snowflakes_big.png"),
		}
	};
};
