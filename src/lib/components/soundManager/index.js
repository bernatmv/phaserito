import {Sprite} from "../../modules/sprite";
import {Utils} from "../../modules/utils";

export class SoundManager {
	constructor({ game: game = {}, locale: locale = 'en', theme: theme = 'default' }) {
		this.game = game;
		this.locale = locale;
		this.theme = theme;
		// get config and merge with general config
		this.config = require('./config/component')(this.theme, this.locale);
		this.game.config.phaserito = Utils.deepExtend(this.game.config.phaserito, this.config);
		// init environment
		this.initEnvironment();
	}

	initEnvironment() {
		// reference to bar elements
		this.bar = {
			fx: {
				volume: 5,
				on: {},
				off: {},
				sprites: {
					back: [],
					fore: []
				}
			},
			music: {
				volume: 5,
				on: {},
				off: {},
				sprites: {
					back: [],
					fore: []
				}		
			},
		};
	}

	// TODO:
	// Add music, for the moment only one track on a loop
	// Music volume affects only music, fx volume affects every volume (even music)
	// 
	// add(key, volume, loop, connect)
	// addSprite(key)
	// play(key, volume, loop)
	// 
	// volume :number
	// Gets or sets the global volume of the SoundManager, a value between 0 and 1.
	// 
	// http://docs.phaser.io/Phaser.SoundManager.html

	addManager({type: type = 'fx', x: x = 0, y: y = 0, steps: steps = 10}) {
		if (steps > 1) {
			// get dimensions
			var sound = this.game.add.sprite(-100, -100, 'soundManager', type+'Off');
			var left = this.game.add.sprite(-100, -100, 'soundManager', 'barLeftBack');
			var middle = this.game.add.sprite(-100, -100, 'soundManager', 'barMiddleBack');
			var right = this.game.add.sprite(-100, -100, 'soundManager', 'barRightBack');
			var offsetX = sound.getBounds().width + 5;
			var offsetY = (sound.getBounds().height - left.getBounds().height) / 2;
			var middleWidth = middle.getBounds().width;
			// layout manager
			this.bar[type].off = this.game.add.sprite(x, y, 'soundManager', type+'Off');
			this.bar[type].sprites.back[0] = this.game.add.sprite(offsetX+x, y+offsetY, 'soundManager', 'barLeftBack');
			this.bar[type].sprites.fore[0] = this.game.add.sprite(offsetX+x, y+offsetY, 'soundManager', 'barLeftFore');
			for (var i = 1; i < steps-1; i++) {
				this.bar[type].sprites.back[i] = this.game.add.sprite(offsetX+x+middleWidth*i, y+offsetY, 'soundManager', 'barMiddleBack');
				this.bar[type].sprites.fore[i] = this.game.add.sprite(offsetX+x+middleWidth*i, y+offsetY, 'soundManager', 'barMiddleFore');
			}
			this.bar[type].sprites.back[steps-1] = this.game.add.sprite(offsetX+x+middleWidth*(steps-1), y+offsetY, 'soundManager', 'barRightBack');
			this.bar[type].sprites.fore[steps-1] = this.game.add.sprite(offsetX+x+middleWidth*(steps-1), y+offsetY, 'soundManager', 'barRightFore');
			this.bar[type].on = this.game.add.sprite(offsetX+x+middleWidth*steps+10, y, 'soundManager', type+'On');
			// hide fore figures not included in actual volume
			for (var j = this.bar[type].volume; j < steps; j++) {
				this.bar[type].sprites.fore[j].visible = false;
			}
			// destroy extra sprites
			sound.destroy();
			left.destroy();
			middle.destroy();
			right.destroy;
			// return this for piping
			return this;
		}
	}

}
