import {
	Logo
}
from '../modules/logo.js';

export class Loading extends Phaser.State {

	preload() {
		var logo, logoIsDone = false;
		var loadingText, loadingTextGroup;
		var loadingTween;
		var loadingCss = document.getElementById('loadingAnim');
		if (loadingCss) {
			loadingCss.style.visibility = 'hidden';
		}

		var style = {
			font: "24px Roboto-Light",
			fill: "#ffffff"
		};
		var loadCheck = () => {
			if (this.game.load.hasLoaded && logoIsDone) {
				this.game.load.onLoadComplete.remove(loadCheck, this);
				this.game.state.start('Play');
			}
		};

		// Place logo and hide it
		logo = new Logo(this.game);

		// Set animation for the logo
		logo.animate().then(() => {
			logoIsDone = true;
			loadCheck();
		});

		// Set loading text
		loadingText = this.game.add.text(this.game.width / 2, 450, this.game.i18n `Loading...`, style);
		loadingText.anchor.setTo(0.5, 0.5);

		loadingTween = this.game.add.tween(loadingText)
			.to({
				alpha: 0
			}, 800, Phaser.Easing.Linear.None)
			.to({
				alpha: 1
			}, 800, Phaser.Easing.Linear.None)
			.loop().start();

		// Load the rest of the assets
		for (let spriteName in this.game.config.phasersito.sprites) {
			let sprite = this.game.config.phasersito.sprites[spriteName];
			this.game.load.image(spriteName, sprite.url, sprite.overwrite);
		}

		this.game.load.pack('spritesheets', null, this.game.config.phasersito, this);

		this.game.load.pack('sounds', null, this.game.config.phasersito, this);

		for (let atlasName in this.game.config.phasersito.atlases) {
			let atlas = this.game.config.phasersito.atlases[atlasName];
			this.game.load.atlas(atlasName, atlas.url, null, atlas.data, atlas.format);
		}

		for (let audiospriteName in this.game.config.phasersito.audiosprites) {
			let audiosprite = this.game.config.phasersito.audiosprites[audiospriteName];
			this.game.load.audiosprite(audiospriteName, audiosprite.urls, audiosprite.data);
		}

		this.game.load.onLoadComplete.add(loadCheck, this);
	}
};
