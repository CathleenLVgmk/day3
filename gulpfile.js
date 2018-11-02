var gulp = require('gulp');
var data = require('./src/data.json');
var server = require('gulp-webserver');
var path = require('path');
var url = require('url');
var fs = require('fs');
gulp.task('ser', function() {
    return gulp.src('src')
        .pipe(server({
            port: 8899,
            middleware: function(req, res, next) {
                var pathname = url.parse(req.url, true).pathname;
                var paths = path.join('src', pathname);
                //是文件
                if (path.extname(paths) != '') {
                    if (pathname == '/favicon.ico') {
                        res.end();
                    } else {
                        if (fs.existsSync(paths)) {
                            res.end(fs.readFileSync(paths));
                        }

                    }
                } else {
                    //是接口
                    if (pathname == '/') {
                        res.end(fs.readFileSync('src/demo.html'));
                    } else if (pathname == '/api/data') {
                        res.end(JSON.stringify({ code: 0, obj: data }));
                    }

                }
            }
        }))
})