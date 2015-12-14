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
        js: './spec/*.js'
    }
}
//Start a local development server
gulp.task('connect', function(){
    connect.server({
        root: './',
        port:config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

gulp.task('open', ['connect'], function(){
    gulp.src('./SpecRunner.html')
        .pipe(open('',{url:config.devBaseUrl + ':'+ config.port + '/'}));
});


gulp.task('js', function(){
    gulp.src(config.paths.js)
        .pipe(connect.reload());
});

gulp.task('watch', function(){
    gulp.watch(config.paths.js, ['js']);
});

gulp.task('default', ['connect', 'js', 'open','watch']);
