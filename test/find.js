/**
 * Tests for gulp-license-finder
 */

var licenseFinder = require('../');
var should = require('should');
var Stream = require('stream');
var File = require('gulp-util').File;
var path = require('path');
require('mocha');


describe('gulp-license-finder', function() {

	describe('licenseFinder()', function() {

		it('should return a file in a stream with a default name', function (done) {
			// finding licenses can take some time
			this.timeout(20000);

			var stream = licenseFinder();
			var dataSent = false;

			stream.on('data', function (chunk) {
				dataSent = true;
				chunk.should.be.an.instanceOf(File);
				chunk.path.should.be.equal(path.join(process.cwd(), 'licenses.txt'));
			});

			stream.on('finish', function () {
				dataSent.should.be.true;
				done();
			});

			stream.on('error', function (err) {
				done(err);
			});

			stream.should.be.an.object;
			stream.should.be.an.instanceOf(Stream);
		});


		it('should allow the filename to be set', function (done) {
			// finding licenses can take some time
			this.timeout(20000);

			var stream = licenseFinder('fred.txt');
			var dataSent = false;

			stream.on('data', function (chunk) {
				dataSent = true;
				chunk.should.be.an.instanceOf(File);
				chunk.path.should.be.equal(path.join(process.cwd(), 'fred.txt'));
			});

			stream.on('finish', function () {
				dataSent.should.be.true;
				done();
			});

			stream.on('error', function (err) {
				done(err);
			});

			stream.should.be.an.object;
			stream.should.be.an.instanceOf(Stream);
		});

	});

});
