module.exports = function (theme, lang) {
	return {
		"soundManager": {
			data: require("./ui.json"),
			format: Phaser.Loader.TEXTURE_ATLAS_JSON_HASH,
			url: require("../../../../../assets/themes/"+theme+"/soundManager/ui.png")
		},
	};
};
