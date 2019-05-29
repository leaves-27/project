var gulp = require('gulp');

var fs = require('fs'),
    fileContent = fs.readFileSync('./package.json'),
    jsonObj = JSON.parse(fileContent);

var del = require('del'),
    pngquant = require('imagemin-pngquant'),
    minifyHTML = require('gulp-minify-html'),
    uglify = require('gulp-uglify'),//压缩js
    imagemin = require('gulp-imagemin'),//压缩图片
    minifyCSS = require('gulp-minify-css');

var mainBowerFiles = require('main-bower-files');

var ngAnnotate = require('gulp-ng-annotate');

var connect           = require('gulp-connect');
var yaml         = require('yamljs');
var path         = require('path');

var argv              = process.argv.pop();
var DEBUGGER          = (argv === "-D" || argv === "-d") ? true : false;

var env               = DEBUGGER ? ".dev" : "";
var config            = yaml.load(path.join(process.cwd(), "etc/config.dev.yaml")).config;
var port              = config.port;
 

//基础变量
var paths = {
    name : jsonObj.name,
    version : jsonObj.version,
    build : './build/' + jsonObj.name
}

gulp.task("bower", function(){
  return gulp.src(mainBowerFiles())
    .pipe(gulp.dest('./src/lib/'));
});

gulp.task('clean',function(cb) {
  del(['build','lib'], cb);
});

gulp.task('uglify',['cssmin'],function(){
  return gulp.src(['./src/**/*.js'])
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest(paths.build));
});

gulp.task('cssmin',['minifyhtml'],function(){
  return gulp.src(['./src/**/*.css'])
    .pipe(minifyCSS({keepBreaks:false}))
    .pipe(gulp.dest(paths.build));
});

gulp.task('minifyhtml',['imagesmin'],function(){
  var opts = {
    conditionals: true,
    spare:true
  };

  return gulp.src(['./src/**/*.html'])
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest(paths.build));
});

gulp.task('imagesmin',['bower'],function(){
  return gulp.src('./images/*')
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest(paths.build+'/imgs/'));
});

gulp.task("connect",['uglify'],function(){
  connect.server({
    root : './build/survey',
    port : port,
    host: config.host,
    livereload : false
  });
});

gulp.task('default', ['clean','uglify','connect']);
