'use strict';

//Константы
const { src, dest, watch, series, parallel } = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  del = require('del'),
  browserSync = require('browser-sync').create(),
  cache = require('gulp-cache'),
  concat = require('gulp-concat'),
  cssnano = require('gulp-cssnano'),
  imagemin = require('gulp-imagemin'),
  rename = require('gulp-rename'),
  uglifyjs = require('gulp-uglifyjs'),
  htmlmin = require('gulp-htmlmin'),
  sourcemaps = require('gulp-sourcemaps'),
  pngquant = require('imagemin-pngquant');


//Функции
function localServer() {
  compileSass();
  browserSync.init({
    server: {
      baseDir: 'src'
    }
  });
  watch('src/**/*.html').on('change', browserSync.reload);
  watch('src/sass/**/*.{sass,scss}', compileSass);
  watch('src/js/**/*.js').on('change', browserSync.reload);
}

function compileSass() {
  return src('src/sass/**/*.{sass,scss}')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    overrideBrowserslist: ['last 15 versions', '> 1%'],
    cascade: true
  }))
  .pipe(sourcemaps.write('.'))
  .pipe(dest('src/css'))
  .pipe(browserSync.stream());
 // cb();
}

function minCSS(cb) {
  src(['src/css/*.css', '!src/css/*.min.css'])
  .pipe(cssnano())
  .pipe(rename({suffix: '.min'}))
  .pipe(dest('src/css'));
  cb();
}

function clean(cb) {
  del.sync('dist');
  cb();
}

function buildImg() {
  src('src/img/**/*')
		.pipe(cache(imagemin({
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		})))
		.pipe(dest('dist/img'));
}

function buildCSS(cb) {
  src('src/css/**/*.min.css')
  .pipe(dest('dist/css'));
  cb();
}

function buildFonts(cb) {
  src('src/fonts/**/*')
  .pipe(dest('dist/fonts'));
  cb();
}

function buildJS(cb) {
  src('src/js/product.js')
  .pipe(uglifyjs())
  .pipe(rename({suffix: '.min'}))
  .pipe(dest('dist/js'));
 // src('src/js/*.min.js')
 // .pipe(dest('dist/js'));
  cb();
}

function buildHTML(cb) {
  src('src/**/*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(dest('dist'));
  cb();
}

function buildPHP() {
  return src('src/php/**/*.php')
    .pipe(dest('dist/php'));
}


//Экспорт функций
exports.build = series(minCSS);
exports.serve = localServer;