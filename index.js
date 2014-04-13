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

// Consts
var PLUGIN_NAME = 'gulp-license-finder';

function licenseFinder(filename, options) {

	// if the filename is an object, then
	// we will assume this is just an options
	// object
	if (typeof filename === 'object') {
		options = filename;
		filename = options.filename;
	}

	// set default options
	filename = filename || 'licenses.txt';
	options = options || {};
	options.directory = options.directory || process.cwd();
	options.production = options.production || false;
	options.csv = options.csv || false;

	var stream = new Stream();

	nlf.find(options, function (err, data) {
		if (err) {
			throw new gutil.PluginError(PLUGIN_NAME, err, {showStack: true});
		}

		var formatter = options.csv ? nlf.csvFormatter : nlf.standardFormatter;

		formatter.render(data, function (err, output) {
			if (err) {
				throw new gutil.PluginError(PLUGIN_NAME, err, {showStack: true});
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
