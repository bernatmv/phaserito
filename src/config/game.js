module.exports = function (lang) {
	return {
		game: {
			animations: require("./animations"),
			atlases: require("./atlases/")(lang),
			audiosprites: require("./audiosprites/index.js")(lang),
			sprites: require("./sprites")(lang),
			sounds: require("./sounds.js")(lang)
		}
	};
}
