import {Logo} from '../../lib/modules/logo.js';

export class Loading extends Phaser.State {

	preload() {
		var logo, logoIsDone = false;
		var loadingText, loadingTextGroup;
		var loadingTween;
		// disable CSS animation for the loading
		var loadingCss = document.getElementById('loadingAnim');
		if (loadingCss) {
			loadingCss.style.visibility = 'hidden';
		}
		
		var style = {
			font: "24px Roboto-Light",
			fill: "#ffffff"
		};

		// when everything's load, start the game
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
			.loop()
			.start();

		// load sprites
		for (let spriteName in this.game.config.phaserito.sprites) {
			let sprite = this.game.config.phaserito.sprites[spriteName];
			this.game.load.image(spriteName, sprite.url, sprite.overwrite);
		}

		// load sounds
		this.game.load.pack('sounds', null, this.game.config.phaserito, this);

		// load atlases
		for (let atlasName in this.game.config.phaserito.atlases) {
			let atlas = this.game.config.phaserito.atlases[atlasName];
			this.game.load.atlas(atlasName, atlas.url, null, atlas.data, atlas.format);
		}

		// load audiosprites
		for (let audiospriteName in this.game.config.phaserito.audiosprites) {
			let audiosprite = this.game.config.phaserito.audiosprites[audiospriteName];
			this.game.load.audiosprite(audiospriteName, audiosprite.urls, audiosprite.data);
		}

		// call loadCheck when the queue has been fully processed
		this.game.load.onLoadComplete.add(loadCheck, this);
	}
};
