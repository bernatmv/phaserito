module.exports = function (lang) {
	return {
		"dialog-button": {
			data: require("./dialog-button.json"),
			format: Phaser.Loader.TEXTURE_ATLAS_JSON_HASH,
			url: require("../../assets/shared/dialog-button.png"),
		},
	};
};
