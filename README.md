![status](https://secure.travis-ci.org/iandotkelly/gulp-license-finder.png?branch=master)

## Information

<table>
<tr>
<td>Package</td><td>gulp-license-finder</td>
</tr>
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

gulp.task('find', function() {
	licenseFind()
		.pipe(gulp.dest('./audit'))
});
```

This will use the nlf modult to attempt to identify licenses in your node project and its dependencies, and will provide a file stream
that can be piped to a destination folder.


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
