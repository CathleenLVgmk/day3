var gulp = require('gulp');
var data = require('../data.json');
var server = require('gulp-webserver');
var fs = require('fs');
gulp.task('ser', function() {
    return gulp.src('../')
        .pipe(server({
            port: 8899,
            middleware: function(req, res, next) {
                console.log(req.url);
                if (req.pathname == '/') {
                    res.end(fs.readFileSync('../demo.html'));
                } else if (req.pathname == '/favicon.ico') {
                    res.end();
                } else if (req.pathname == '/api/data') {
                    res.end(JSON.stringify(data));
                }
            }
        }))
})