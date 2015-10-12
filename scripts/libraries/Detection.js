var Detection = (function () {

	'use strict';

	var Detection = function () {

	};

	Detection.prototype.hasCanvas = function () {
		return !! window.CanvasRenderingContext2D;
	};

	Detection.prototype.hasWebGL = function () {
		try {
			var canvas = document.createElement('canvas');
			return !! (window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
		} catch (exception) {
			return false;
		}
	};

	Detection.prototype.hasWorker = function () {
		return !! window.Worker;
	};

	Detection.prototype.hasFile = function () {
		return window.File && window.FileReader && window.FileList && window.Blob;
	};

	Detection.prototype.getBrowser = function () {
		return navigator.userAgent;
	};

	return Detection;

})();