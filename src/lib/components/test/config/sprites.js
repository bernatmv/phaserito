module.exports = function (theme, lang) {
	var path = "../../../../assets/themes/"+theme+"/test/";
	console.log(path + "bruna.png");
	return {
		"explosion1": {
			"type": "image",
			"url": require(path + "bruna.png"),
			"overwrite": false
		}
	};
};
