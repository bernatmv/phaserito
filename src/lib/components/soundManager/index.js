import {Sprite} from "../../modules/sprite";
import {Button} from "../../modules/button";
import {Utils} from "../../modules/utils";

/**
 * This class adds objects to manage both for FX and Music volumes
 */
export class SoundManager {
	/**
	 * Constructor of the Class
	 * @param  {Object} options.game: game          The instance of a Phaserito.Game or Phaser.Game
	 * @param  {String} locale:       locale        Optional, locale of the theme (refer to theme documentation for more info). Defaults to "en" locale.
	 * @param  {String} theme:        theme         Optional, theme to apply to the managers (refer to theme documentation for more info). Defaults to "default" theme.
	 * @param  {Phaser.Group} group:  group         Optional, the group where the manager will be added. If not provided the managers will be added to the world.
	 * @return {SoundManager}         The instance of the class
	 */
	constructor({ game: game = {}, locale: locale = 'en', theme: theme = 'default', group: group = undefined }) {
		// save params to properties
		this.game = game;
		this.group = group;
		this.locale = locale;
		this.theme = theme;
		// get config and merge with general config
		this.config = require('./config/component')(this.theme, this.locale);
		this.game.config.phaserito = Utils.deepExtend(this.game.config.phaserito, this.config);
		// music and laps
		this.music = undefined;
		this.laps = [];
		this.currentLap = undefined;
		// sound efects
		this.sounds = undefined;
		this.effects = [];
		// init environment
		this.__initEnvironment();
	}

	/**
	 * Initializes environment (privately called)
	 * @return {SoundManager} return itself for piping
	 */
	__initEnvironment() {
		// reference to bar elements
		this.bar = {
			fx: {
				group: undefined,
				volume: 10,
				on: {},
				off: {},
				sprites: {
					back: [],
					fore: []
				}
			},
			music: {
				group: undefined,
				volume: 10,
				on: {},
				off: {},
				sprites: {
					back: [],
					fore: []
				}		
			},
		};
		// return this for piping
		return this;
	}

	/**
	 * Adds a manager, be it FX or Music
	 * @param {String} options.type:  type  Type can take the values of "fx" or "music" and defines the type os manager to be added
	 * @param {Number} options.x:     x     The x position of the group containing the manager
	 * @param {Number} options.y:     y     The y position of the group containing the manager
	 * @param {Number} options.steps: steps The number of volume steps on the manager (eg: 10 steps is the default option and each step will represent a 10% of the volume)
	 * @return {SoundManager} Return itself for piping
	 */
	addManager({type: type = 'fx', x: x = 0, y: y = 0, steps: steps = 10}) {
		if (steps > 1) {
			// create group
			var group = this.bar[type].group = new Phaser.Group(this.game, this.group);
			group.position = new Phaser.Point(x, y);
			var callback = (type === 'fx') ? this.setFxVolume : this.setMusicVolume;
			// layout manager
//			this.bar[type].off = group.add(new Button(this.game, x, y, 'soundManager', () => { callback(0); }, this, type+'OffHover', type+'OffOut', type+'OffDown'));
			this.bar[type].off = group.add(new Button(this.game, x, y, 'soundManager', () => { this.setVolume({type, volume: 0}); }, this, type+'OffHover', type+'OffOut', type+'OffDown'));
			this.bar[type].sprites.back[0] = group.add(new Button(this.game, x, y, 'soundManager', () => { this.setVolume({type, volume: 1}); }, this, 'barLeftBack', 'barLeftBack', 'barLeftBack'));
			this.bar[type].sprites.fore[0] = group.add(new Sprite(this.game, x, y, 'soundManager', 'barLeftFore'));
			for (var i = 1; i < steps-1; i++) {
				this.bar[type].sprites.back[i] = group.add(new Button(this.game, x, y, 'soundManager', ((i) => { return () => { this.setVolume({type, volume: i+1}); } })(i), this, 'barMiddleBack', 'barMiddleBack', 'barMiddleBack'));
				this.bar[type].sprites.fore[i] = group.add(new Sprite(this.game, x, y, 'soundManager', 'barMiddleFore'));
			}
			this.bar[type].sprites.back[steps-1] = group.add(new Button(this.game, x, y, 'soundManager', () => { this.setVolume({type, volume: steps}); }, this, 'barRightBack', 'barRightBack', 'barRightBack'));
			this.bar[type].sprites.fore[steps-1] = group.add(new Sprite(this.game, x, y, 'soundManager', 'barRightFore'));
			this.bar[type].on = group.add(new Button(this.game, x, y, 'soundManager', () => { this.setVolume({type, volume: steps}); }, this, type+'OnHover', type+'OnOut', type+'OnDown'));
			// hide fore figures not included in actual volume
			this.__displayVolumeBar(type);
			// position elements
			this.__positionElements({type, x, y});
			// return this for piping
			return this;
		}
	}

	/**
	 * Shows the fore figures that should be visible for this volume level (privately called)
	 * @param  {String} options.type:   type          Type can take the values of "fx" or "music" and defines the type os manager to be added
	 * @return {SoundManager} Return itself for piping
	 */
	__displayVolumeBar(type) {
		// show fore figures included in actual volume
		for (var j = 0; j < this.bar[type].volume; j++) {
			this.bar[type].sprites.fore[j].visible = true;
		}
		// hide fore figures not included in actual volume
		for (var j = this.bar[type].volume; j < this.bar[type].sprites.fore.length; j++) {
			this.bar[type].sprites.fore[j].visible = false;
		}
		// return this for piping
		return this;
	}

	/**
	 * Positions the elements of the manager (privately called)
	 * @param {String} options.type:  type  Type can take the values of "fx" or "music" and defines the type os manager to be added
	 * @return {SoundManager} return itself for piping
	 */
	__positionElements({type: type = 'fx'}) {
			// get dimensions
			var x = 0, y = 0;
			var sound = this.bar[type].off;
			var left = this.bar[type].sprites.back[0];
			var middle = this.bar[type].sprites.back[1];
			var offsetX = sound.getBounds().width + 5;
			var offsetY = (sound.getBounds().height - left.getBounds().height) / 2;
			var middleWidth = middle.getBounds().width;
			var steps = this.bar[type].sprites.back.length;
			// position elements
			this.bar[type].off.position = new Phaser.Point(x, y);
			this.bar[type].sprites.back[0].position = new Phaser.Point(offsetX+x, y+offsetY);
			this.bar[type].sprites.fore[0].position = new Phaser.Point(offsetX+x, y+offsetY);
			for (var i = 1; i < steps-1; i++) {
				this.bar[type].sprites.back[i].position = new Phaser.Point(offsetX+x+middleWidth*i, y+offsetY);
				this.bar[type].sprites.fore[i].position = new Phaser.Point(offsetX+x+middleWidth*i, y+offsetY);
			}
			this.bar[type].sprites.back[steps-1].position = new Phaser.Point(offsetX+x+middleWidth*(steps-1), y+offsetY);
			this.bar[type].sprites.fore[steps-1].position = new Phaser.Point(offsetX+x+middleWidth*(steps-1), y+offsetY);
			this.bar[type].on.position = new Phaser.Point(offsetX+x+middleWidth*steps+10, y);
			// return this for piping
			return this;
	}

	// TODO:
	// Add the option to set a mute button as standalone for sound and another for music

	setVolume({type: type = 'fx', volume: volume = 10}) {
		return (type === 'fx') ? this.__setFxVolume(volume) : this.__setMusicVolume(volume);
	}

	__setFxVolume(volumeStep) {
		this.bar.fx.volume = volumeStep;
		this.__displayVolumeBar('fx');
		// this volume affects the whole application, including the music
		this.game.sound.volume = this.__getFxVolume();
	}

	__setMusicVolume(volumeStep) {
		this.bar.music.volume = volumeStep;
		this.__displayVolumeBar('music');
		// this volume affects only the music
		this.currentLap && (this.currentLap.volume = this.__getMusicVolume());
	}

	__getFxVolume() {
		return (this.bar.fx.volume / this.bar.fx.sprites.fore.length).toFixed(2);
	}

	__getMusicVolume() {
		return (this.bar.music.volume / this.bar.music.sprites.fore.length).toFixed(2);
	}

	// add possibility to pass one lap with or w/o loop
	// multiple laps with or w/o general loop
	// music play and resume

	setMusic({laps: laps = [], key: key = 'music', loop: loop = false}) {
		// load audiosprite
		this.music = this.game.add.audioSprite(key);
		// save laps
		this.laps = laps;
		// return this for piping
		return this;
	}

	playMusic() {
		if (this.laps.length > 0) {
			// get first lap in the collection
			var lapName = this.laps.shift();
			// play lap
			this.currentLap = this.music.play(lapName);			
			this.currentLap.volume = this.__getMusicVolume();
			// push the lap at the end of the collection
			this.laps.push(lapName);
			this.currentLap.onMarkerComplete.addOnce(() => console.debug("aaa"), this);
			this.currentLap.onStop.addOnce(() => console.debug("bbb"), this);
		}
		// return this for piping
		return this;
	}

	pauseMusic() {
		this.currentLap && this.currentLap.pause();
	}

	resumeMusic() {
		this.currentLap && this.currentLap.resume();
	}
}
