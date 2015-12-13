/**
 * Created by Ayush on 12/13/2015.
 */
var gulp = require('gulp');
var connect = require('gulp-connect');	//Runs a local dev server
var open = require('gulp-open');	//Open a URL in a web browser

var config={
    port:9005,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './*.html',
        js: './**/*.js'
    }
}
//Start a local development server
gulp.task('connect', function(){
    connect.server({
        port:config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

gulp.task('open', ['connect'], function(){
    gulp.src('./SpecRunner.html')
        .pipe(open('',{url:config.devBaseUrl + ':'+ config.port + '/'}));
});

gulp.task('html', function(){
    gulp.src(config.paths.html)
        .pipe(connect.reload());
});

gulp.task('js', function(){
    gulp.src(config.paths.js)
        .pipe(connect.reload());
});

gulp.task('watch', function(){
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js']);
});

gulp.task('default', ['html', 'js', 'open','watch']);
