// Console-polyfill. MIT license.
// https://github.com/paulmillr/console-polyfill
// Make it safe to do console.log() always.
// TIP change this.console for window.console because in webpack isn't use
// window as a global scope =|
(function(con) {
	'use strict';
	var prop, method;
	var empty = {};
	var dummy = function() {};
	var properties = 'memory'.split(',');
	var methods = ('assert,clear,count,debug,dir,dirxml,error,exception,group,' +
		'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' +
		'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn').split(',');
	while (prop = properties.pop()) con[prop] = con[prop] || empty;
	while (method = methods.pop()) con[method] = con[method] || dummy;
})(window.console = window.console || {});
