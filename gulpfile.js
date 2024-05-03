const gulp =  require('gulp');
const sass = require('gulp-sass')(require('sass'));//sass转为css
const minifyCss =  require('gulp-minify-css');//压缩css

gulp.task('sass',async function(){
    return gulp.src('components/css/**/*.scss')
        .pipe(sass())
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/css'));
});



