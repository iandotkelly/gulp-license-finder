/*
 * gulp-license-finder
 * https://github.com/iandotkelly/gulp-license-finder
 *
 * Copyright (c) 2014 Ian Kelly
 * Licensed under the MIT license.
 */

var gutil = require('gulp-util');
var File = gutil.File;
var nlf = require('nlf');
var path = require('path');
var PluginError = gutil.PluginError;
var Stream = require('stream');

function licenseFinder(filename, options) {

	if (typeof filename === 'object') {
		options = filename;
		filename = null;
	}

	filename = filename || 'licenses.txt';

	options = options || {};
	options.production = options.production || false;
	options.csv = options.csv || false;

	var stream = new Stream();

	var buffer = new Buffer(0);

	nlf.find(options, function (err, data) {

		if (err) {
			// do something gulpy
		}

		var formatter = options.csv ? nlf.csvFormatter : nlf.standardFormatter;
		formatter.render(data, function (err, output) {
			if (err) {
				// do something gulpy
			}

			var file = new File({
				path: path.join(process.cwd(), filename),
				contents: new Buffer(output)
			});

			stream.emit('data', file);
			stream.emit('finish');
		});

	});

	return stream;
}

module.exports = licenseFinder;
