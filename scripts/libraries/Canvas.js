var Canvas = (function (window) {

	'use strict';

	var Canvas = function (width, height, scale) {

		if(!this.canvas) {
			this.canvas = document.createElement('canvas');
		}

		this.width = width;
		this.height = height;
		this.scale = scale || window.devicePixelRatio;

		this.canvas.width = this.width * this.scale;
		this.canvas.height = this.height * this.scale;

		this.gl = this.canvas.getContext('webgl') || this.canvas.getContext('experimental-webgl');

		if (!this.gl) {
			throw new Error("WebGL Not Supported");
			return false;
		}


		this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);

	};

	Canvas.prototype.getRawCanvas = function () {
		return this.canvas;
	};

	Canvas.prototype.getContext = function () {
		return this.canvas.getContext('webgl') || this.canvas.getContext('experimental-webgl');
	};


	Canvas.poolSize = 30;

	return Canvas;

})(window);