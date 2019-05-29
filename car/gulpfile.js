var gulp         = require('gulp');
var fs           = require('fs');
var del          = require('del');
var connect      = require('gulp-connect');

var stylus = require('gulp-stylus');
var nib = require('nib');
var uglify = require('gulp-uglify');

var bower = require('gulp-bower');

var jsonObj = JSON.parse(fs.readFileSync('./package.json'));

var rename = require('gulp-rename');
var vm = require('gulp-velocityjs');

//基础变量
var paths = {
  name : jsonObj.name,
  version : jsonObj.version,
  src:"./src",
  build : './build/' + jsonObj.name
}

gulp.task("connect",['copy'],function(){
  connect.server({
    root : './build/'+jsonObj.name,
    port : "5000",
    host: "localhost",
    livereload : false
  });
});

gulp.task('clean',function(cb) {
  del(['build'], cb);
});

// gulp.task('copy',['stylCompile','bower','uglifyJs'],function(){
//   return gulp.src(paths.src + '/**/*.html')
//     .pipe(gulp.dest(paths.build+'/'));
// });

var config = {
    'root': './src/views',
    'encoding': 'utf-8',
    //global macro defined file
    'macro': 'src/macro/macro.vm',
    'globalMacroPath': 'src/macro/',
    // test data root path
    'dataPath': './mock'
};

gulp.task('copy',['stylCompile','bower','uglifyJs','imgs'],function(){
  return gulp.src(paths.src + '/views/*.vm')
    .pipe(vm(config))
    .pipe(rename({extname:'.html'}))
    .pipe(gulp.dest(paths.build +'/'));
});

gulp.task('imgs', function(){
  return gulp.src(paths.src + '/imgs/**/*.jpg')
    .pipe(gulp.dest(paths.build +'/imgs'))
});

gulp.task('stylCompile', function(){
  return gulp.src(paths.src + '/**/*.styl')
    .pipe(stylus({
      use : nib(),
      compress : true
    }))
    .pipe(gulp.dest(paths.build +'/'))
});

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest(paths.build +'/common/lib'))
});

gulp.task("uglifyJs",function(){
  return gulp.src(paths.src + "/**/*.js")
    .pipe(uglify())
    .pipe(gulp.dest(paths.build +'/'))
});

gulp.task('watch', function(){
  gulp.watch(paths.src +'/**/*.*', ['copy','stylCompile','uglifyJs','imgs']);
});

gulp.task('default', ['clean','connect']);
