var gulp         = require('gulp');

var fs           = require('fs'),
    fileContent  = fs.readFileSync('./package.json'),
    jsonObj      = JSON.parse(fileContent);

var del          = require('del');

var connect           = require('gulp-connect');
var yaml         = require('yamljs');
var path         = require('path');
var uglify           = require('gulp-uglify');

var env               = ".dev";
var config            = yaml.load(path.join(process.cwd(), "etc/config"+ env +".yaml")).config;
var port              = config.port;

var webpack = require('gulp-webpack');
//基础变量
var paths = {
    name : jsonObj.name,
    version : jsonObj.version,
    build : './build/' + jsonObj.name
}
gulp.task('clean',function(cb) {
  del(['build'], cb);
});

gulp.task('copy',function(){
  return gulp.src(['./src/**/*.jpg','./src/**/*.png','./src/index.html','./src/main.css'])
    .pipe(gulp.dest(paths.build));
});

gulp.task('webpack',['copy'],function(){
  return gulp.src('./src/main.js')
    .pipe(webpack(require('./webpack.config.js') ))
    .pipe(uglify())
    .pipe(gulp.dest(paths.build));
});

gulp.task("connect",['webpack'],function(){
  connect.server({
    root : './build/',
    port : port,
    host: config.host,
    livereload : false
  });
});

gulp.task('default', ['clean','connect']);