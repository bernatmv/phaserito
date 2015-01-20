module.exports = function (lang) {
	return {
		"logo": {
			data: require("./logo.json"),
			format: Phaser.Loader.TEXTURE_ATLAS_JSON_HASH,
			url: require("../../assets/sprites.png")
		},
	};
};
