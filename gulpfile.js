var $            = require('gulp-load-plugins')();
var gulp         = require('gulp'),
browser      		 = require('browser-sync').create(),
autoprefixer 		 = require('autoprefixer'),
postcss      		 = require('gulp-postcss'),
combiner     		 = require('stream-combiner2').obj,
pngquant     		 = require('imagemin-pngquant'),
iconfont     		 = require('gulp-iconfont'),
consolidate  		 = require('gulp-consolidate'),
svgstore     		 = require('gulp-svgstore'),
rename       		 = require('gulp-rename'),
svgmin       		 = require('gulp-svgmin'),
rename           = require('gulp-rename'),
inject       		 = require('gulp-inject'),
notify					 = require('gulp-notify'),
plumber 				 = require("gulp-plumber"),
pug  						 = require('gulp-pug'),
sourcemaps       = require('gulp-sourcemaps'),
pugBEMify 			 = require('pug-bemify'),
browserify       = require('browserify'),
watchify         = require('watchify'),
source           = require('vinyl-source-stream');

/*#Build plugins*/
var csso = require('gulp-csso'),
useref 	 = require('gulp-useref'),
concat 	 = require('gulp-concat'),
gulpif   = require('gulp-if'),
uglify 	 = require('gulp-uglify'),
babel = require('gulp-babel');

var svgWatch            = './dist/img/svgstore/icons/*.svg';
var svgIconsSource      = './sprite.svg';
var svgIconsDestination = './';

gulp.task('svgstore', function () {
	var svgs = gulp
	.src(svgWatch)  
	.pipe(rename({prefix: 'svg-'}))
	.pipe(svgmin())
	.pipe(svgstore({ inlineSvg: true }));

	function fileContents (filePath, file) {
		return file.contents.toString();
	}

	return gulp
	.src(svgIconsSource)
	.pipe(inject(svgs, { transform: fileContents }))
	.pipe(gulp.dest(svgIconsDestination));
});

/*gulp.task('pug', function() {
	return gulp.src('pug/*.pug')
	.pipe(plumber())
	.pipe(pug({
		plugins : [pugBEMify()],
		pretty: true
	}))
	.on("error", notify.onError(function(error) {
		return "Message to the notifier: " + error.message;
	}))
	.pipe(gulp.dest('./'));
});*/

gulp.task("build:icons", function() {
    return gulp.src(["./assets/icons/*.svg"]) //path to svg icons
    .pipe(iconfont({
    	fontName: "myicons",
    	formats: ["ttf", "eot", "woff", "svg"],
    	centerHorizontally: true,
    	fixedWidth: true,
    	normalize: true,
    	fontHeight: 1500
    }))
    .on("glyphs", (glyphs) => {

        gulp.src("./assets/icons/util/*.scss") // Template for scss files
        .pipe(consolidate("lodash", {
        	glyphs: glyphs,
        	fontName: "myicons",
        	fontPath: "../fonts/"
        }))
            .pipe(gulp.dest("./assets/scss/icons/")); // generated scss files with classes
          })
      .pipe(gulp.dest("./dist/fonts/")); //icon font destination
    });

gulp.task('img', function() {
	return combiner(
		gulp.src('./assets/img/**/*'),
		$.imagemin({
			interlaced: true,
			progressice: true,
			svgoPlugins: [{removeViewBox: false}],
			une: [pngquant()]
		}),
		gulp.dest('./dist/img')
		).on('error', $.notify.onError());
});

gulp.task('sass', function () {
	return combiner(
		gulp.src('assets/scss/**/*.scss'),
		$.sourcemaps.init(),
		$.sass({
			output_style: 'compressed'
		}),
		postcss([ autoprefixer({ browsers: ['last 3 version'] }) ]),
		$.sourcemaps.write('.'),
		gulp.dest('./dist/css'),
		browser.stream({match: '**/*.css'})
		).on('error', $.notify.onError());
});


// Starts a BrowerSync instance
gulp.task('serve', ['sass'], function(){
	browser.init({
		server: {
			baseDir: "./"
		}
	});
});

gulp.task('build:css', ['sass'], function() {
	return gulp.src('./dist/css/styles.css')
	.pipe(csso({
		restructure: false,
		sourceMap: true,
		debug: true
	}))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('./dist/css/'));
});


gulp.task('build:js', function() {
	return gulp.src([
		'dist/libs/*.js' 
		])
	.pipe(sourcemaps.init())
	.pipe(babel({
		presets: ['es2015']
	}))
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});

gulp.task('build', ['img', 'build:css', 'build:js']);

var sourceFile = './assets/common.js',
destFolder = './dist/libs/',
destFile = 'app.js';

gulp.task('browserify', function() {

	var b = browserify({
		entries: ['./assets/common.js'],
		cache: {},
		packageCache: {},
		plugin: [watchify]
	});

	b.on('update', rebundle);

	function rebundle() {
		return b.bundle()
		.pipe(source(destFile))
		.pipe(gulp.dest(destFolder));
	}

	return rebundle();
});

// Runs all of the above tasks and then waits for files to change
gulp.task('default', ['browserify', 'serve'], function() {
	//gulp.watch('pug/**/*.pug', ['pug']);
	gulp.watch(['assets/scss/**/*.scss'], ['sass']);
	gulp.watch('./**/*.html').on('change', browser.reload);
	gulp.watch('dist/libs/*.js').on('change', browser.reload);
});