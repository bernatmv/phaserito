var _HOST = window.location.hostname;

module.exports = function (theme, lang) {
	return {
		component: {
			test: {
				
			}
		},
		atlases: require("./atlases/index.js")(theme, lang),
		sprites: require("./sprites.js")(theme, lang)
	};
};

