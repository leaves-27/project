var gulp         = require('gulp');

var fs           = require('fs'),
    fileContent  = fs.readFileSync('./package.json'),
    jsonObj      = JSON.parse(fileContent);

var yaml         = require('yamljs');
var path         = require('path');

var del          = require('del'),
    minifyHTML   = require('gulp-minify-html'),
    uglify       = require('gulp-uglify'),//压缩js
    minifyCSS    = require('gulp-minify-css');

var mainBowerFiles    = require('main-bower-files');
var jade              = require('gulp-jade');
var wrap              = require('gulp-wrap-amd');
var stylus            = require('gulp-stylus');

var connect           = require('gulp-connect');
var argv              = process.argv.pop();
var DEBUGGER          = (argv === "-D" || argv === "-d") ? true : false;

var env               = DEBUGGER ? ".dev" : "";
var config            = yaml.load(path.join(process.cwd(), "etc/config.yaml")).config;
var port              = config.port;

//基础变量
var paths = {
    name : jsonObj.name,
    version : jsonObj.version,
    src:"./src",
    build : './build/' + jsonObj.name
}

gulp.task("bower", function(){
  return gulp.src(mainBowerFiles())
    .pipe(gulp.dest(paths.src+'/lib/'));
});

gulp.task("connect",function(){
  connect.server({
    // root : './build/'+jsonObj.name,
    root : './',
    port : port,
    host: config.host,
    livereload : false
  });
});

gulp.task('clean',function(cb) {
  del(['build'], cb);
});

gulp.task('uglify',['cssmin','jade','stylus'],function(){
  return gulp.src([paths.src+'/**/*.js'])
    // .pipe(uglify())
    .pipe(gulp.dest(paths.build));
});

gulp.task('cssmin',['minifyhtml'],function(){
  return gulp.src([paths.src+'/**/*.css'])
    .pipe(minifyCSS({keepBreaks:false}))
    .pipe(gulp.dest(paths.build));
});

gulp.task('minifyhtml',['imagesmin'],function(){
  var opts = {
    conditionals: true,
    spare:true
  };

  return gulp.src([paths.src+'/**/*.html'])
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest(paths.build));
});

gulp.task('imagesmin',['bower'],function(){
  return gulp.src('./images/*')
    .pipe(gulp.dest(paths.build+'/images/'));
});

gulp.task('jade', function() {
  gulp.src(paths.src+'/**/*.jade')
    .pipe(jade({
      client: true
    }))
    .pipe(wrap())
    .pipe(uglify())
    .pipe(gulp.dest(paths.build))
});

gulp.task('stylus', function () {
  gulp.src(paths.src+'/**/*.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest(paths.build));
});

gulp.task('default', ['clean','uglify']);