var app = require('app');
var BrowserWindow = require('browser-window');
var displayWindow = null;

require('crash-reporter').start();

app.on('window-all-closed', function() {
	if (process.platform != 'darwin') {
		app.quit();
	}
});

app.on('ready', function() {
	var display = require('screen');
	var size = display.getPrimaryDisplay().workAreaSize;
	displayWindow = new BrowserWindow({ width: size.width, height: size.height, frame: false });
	displayWindow.loadUrl('file://' + __dirname + '/index.html');
	displayWindow.openDevTools();
	displayWindow.on('closed', function() {
		displayWindow = null;
	});
});