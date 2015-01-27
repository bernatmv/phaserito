# A Phaser.js boilerplate and a library extension

Phaserito is a template to boost any [Phaser.js](http://phaser.io/) game development.
Phaserito can help you with your starting project structure and build process.

[![Build Status](https://travis-ci.org/bernatmv/phaserito.svg?branch=master)](https://travis-ci.org/bernatmv/phaserito.svg?branch=master)


## IMPORTANT

Phaserito is heavily based on the work of **[Nestor Hernández](https://github.com/nesukun)** (Phasercito) and on top of the amazing [Phaser.js](http://phaser.io/) framework by **[Richard Davey](https://github.com/photonstorm)** of [Photonstorm](http://www.photonstorm.com/). You can find **[Phaser on github](https://github.com/photonstorm/phaser)** and contact Photonstorm [via Twitter](https://twitter.com/photonstorm) or on the [Phaser forums](http://www.html5gamedevs.com/forum/14-phaser/).

## What's in it?

### External packages for the build process

- [x] [NPM](https://github.com/npm/npm) to install dependencies
- [x] [Webpack](https://github.com/webpack) and [Gulp](https://github.com/gulpjs/gulp) manage the automated build process with bundling and sourcemaps. Production-ready with dedupe and uglify webpack plugins.
- [x] [ES6](https://github.com/lukehoban/es6features) via [traceur](https://github.com/google/traceur-compiler)
- [x] [Webpack Dev Server](https://github.com/webpack/webpack-dev-server) to provide a local server with livereload
- [x] [Phaser Debug](https://github.com/englercj/phaser-debug) as a debugging tool for the dev server
- [x] [Localtunnel](https://github.com/defunctzombie/localtunnel) to work as a localtunnel for the dev server
- [x] [Bluebird](https://github.com/petkaantonov/bluebird) to work with Promises
- [x] [LESS loader](https://github.com/webpack/less-loader) for LESS compilation to CSS
- [x] [Gulp Imagemin](https://github.com/sindresorhus/gulp-imagemin) for automated image optimization using [pngquant](https://github.com/imagemin/imagemin-pngquant)
- [x] [Gulp Zip](https://github.com/sindresorhus/gulp-zip) for zipping as a Cocoon-ready package
- [x] [AudioSprite](https://github.com/tonistiigi/audiosprite) to create and work with audiosprites
- [x] [HttpPlease](https://github.com/matthewwithanm/httpplease.js) for all Http requests
- [x] [Console Polyfill](https://github.com/paulmillr/console-polyfill) for older IE browsers
- [x] [Karma](https://github.com/karma-runner/karma) Test runner
- [x] [Karma-webpack](https://github.com/webpack/karma-webpack) Karma adapter for webpack


### Components to extend Phaser features

This section is still a WIP

- [ ] [Volume manager](#volume) component
- [ ] [Fullscreen](#fullscreen) component
- [ ] [Ads manager](#ads) component
- [ ] [Orientation](#orientation) component
- [ ] [Dialogs](#dialogs) component
- [x] [Google Analytics](#analytics) component **documentation pending**
- [ ] [SD and HD](#sdhd) automatization component

### Project boilerplate: documentation

This section is still a WIP

- [ ] [Config](#config) documentation
- [ ] [Build](#build) documentation
- [ ] [Dev server](#dev-server) documentation
- [ ] [Game structure](#structure): boot, loading, menu options and play documentation
- [ ] [Aspect ratio](#aspect-ratio) documentation
- [ ] [Scale](#scale) documentation
- [ ] [Image optimization](#image-optimization) documentation
- [ ] [Cocoon build](#cocoon-build) documentation

## Installing

### Node.js 

You will need to first install [Node.js](http://nodejs.org/download/) 

### Setup Your Project

Git clone [Phaserito](https://github.com/bernatmv/phaserito).

    git clone https://github.com/bernatmv/phaserito.git

Go to the project folder and install all the dependencies using NPM:

    npm install

You are now ready to run Phaserito for the first time! just type:

    gulp
    
Run the test

    gulp test
    
Test driven development 

    gulp tdd

## Documentation

WIP!

## Useful tools:

  * [ShoeBox](http://renderhjs.net/shoebox/) to create spritesheets and atlases for pixi.js
  * [TexturePacker](https://www.codeandweb.com/texturepacker) alternative to ShoeBox


