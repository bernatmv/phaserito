import {Utils} from './utils';
/**
 * ALL THE PLUGINS ARE IMPORTED, BUT ONLY THE LOADED PLUGINS ASSETS ARE LOADED
 *
 * TODO: in future versions the plugins should be included automatically based on the folders in the plugin/ directory
 */
import {SoundManager} from '../components/soundManager';

export class ComponentManager {
	constructor({ game: game = {}, locale: locale = 'en', theme: theme = 'default' }) {
		this.game = game;
		this.locale = locale;
		this.theme = theme;
		this.components = {
			'soundManager': SoundManager
		};
	}

	// load the specified plugin from the plugin folder, the param have to be a string
	load(componentName) {
		if (typeof componentName !== "undefined") {
			this.components[componentName] = new this.components[componentName]({ game: this.game, locale: this.locale, theme: this.theme });
		}
	}

	get(componentName) {
		return (this.components[componentName]) ? this.components[componentName] : undefined;
	}
}
