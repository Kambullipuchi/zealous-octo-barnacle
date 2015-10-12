(function () {

	'use strict';

	document.addEventListener("DOMContentLoaded", function () {
		console.time("zob");
		console.log("ZOB Initiated");
		var canvas = new Canvas(window.innerWidth, window.innerHeight);
		var detector = new Detection();
		console.log(detector.getBrowser());
		document.body.append(canvas.canvas);
		console.timeEnd("zob");
	});

})();