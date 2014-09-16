## gulp-license-finder [![Build Status](https://secure.travis-ci.org/iandotkelly/gulp-license-finder.png)](http://travis-ci.org/iandotkelly/gulp-license-finder) [![Dependency Status](https://gemnasium.com/iandotkelly/gulp-license-finder.svg)](https://gemnasium.com/iandotkelly/gulp-license-finder)

<table>
<tr>
<td>Description</td>
<td>Finds licenses in node project and dependencies</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.10</td>
</tr>
</table>

## Usage

```javascript
var licenseFind = require('gulp-license-finder');

gulp.task('licenses', function() {
	return licenseFind()
		.pipe(gulp.dest('./audit'))
});
```

This will attempt to identify licenses in your node project and its dependencies, and will provide a file stream
that can be piped to an 'audit' destination folder.  The file will have a default 'licenses.txt' filename.

To change the output filename, add the name as an argument to licenseFind, for example:

```javascript
var licenseFind = require('gulp-license-finder');

gulp.task('licenses', function() {
	return licenseFind('outputfile.txt')
		.pipe(gulp.dest('./audit'))
});
```

### Options

#### options.directory
Type: `String`
Default value: `current project directory`

A string value for the path of the node project to scan

#### options.production
Type: `Boolean`
Default value: false

A boolean value. If true, only production dependencies are included in the scan

#### options.depth
Type: `Number`
Default value: if undefined this defaults to infinite

The maximum depth of node_modules to traverse, 0 means the immediate dependencies, add 1 per module depth

#### options.csv
Type: `Boolean`
Default value: `./licenses.txt`

A boolean value.  If true the output is in a comma-separated-variable format for import into a spreadsheet.

#### Usage examples:

```javascript
var licenseFind = require('gulp-license-finder');

gulp.task('licenses', function() {
	return licenseFind('outputfile.txt', {
			directory: '/home/me/someproject',
			production: true,
			depth: 5,
			csv: true
		}).pipe(gulp.dest('./audit'))
});
```

### Example output

<pre>
commander@0.6.1 [license(s): MIT]
└── readme files: MIT

read-installed@0.2.2 [license(s): BSD]
└── license files: BSD

glob@3.2.3 [license(s): BSD]
├── package.json:  BSD
└── license files: BSD

archy@0.0.2 [license(s): MIT/X11]
└── package.json:  MIT/X11

json-stringify-safe@5.0.0 [license(s): BSD]
├── package.json:  BSD
└── license files: BSD

should@1.2.2 [license(s): MIT]
└── readme files: MIT
</pre>

For output in CSV format use the csv: true option.

### Unit tests

The majority of the tests for the functionality of this license finder are in the
[nlf](https://www.npmjs.org/package/nlf) module.  This plugin merely provides a gulp
wrapper.

To run the gulp pluging unit tests (such as they are) you should have mocha installed
(version ^1.21.4) and then run

```sh
npm test
```

## LICENSE

(The MIT License)

Copyright (c) 2014 Ian Kelly

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
