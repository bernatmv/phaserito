module.exports = function (lang) {
	return {
		"background": {
			"type": "image",
			"url": require("../assets/shared/slot_bg.png"),
			"overwrite": false
		},
		"paytable1": {
			"type": "image",
			"url": require("../assets/"+lang+"/paytable1.jpg"),
			"overwrite": false
		},
		"paytable2": {
			"type": "image",
			"url": require("../assets/"+lang+"/paytable2.jpg"),
			"overwrite": false
		},
		"help": {
			"type": "image",
			"url": require("../assets/"+lang+"/help.jpg"),
			"overwrite": false
		},
		"foreground": {
			"type": "image",
			"url": require("../assets/" + lang + "/slot_fg.png"),
			"overwrite": false
		},
		"blur": {
			"type": "image",
			"url": require("../assets/shared/blurFigures.png"),
			"overwrite": false
		},
		"minigame.background": {
			"type": "image",
			"url": require("../assets/shared/minigame/bg-minigame.jpg"),
			"overwrite": false
		},
		"minigame.lights": {
			"type": "image",
			"url": require("../assets/shared/minigame/light-win-sleigh.png"),
			"overwrite": false
		},
	};
};
