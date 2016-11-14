var gulp = require('gulp');    //pobierz moduł gulp
var sass = require('gulp-sass');    //pobierz gulp-sass moduł
var sourcemaps = require('gulp-sourcemaps');

gulp.task('scss', function(){
    return gulp.src("sass/main.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
         errLogToConsole: true,
         outputStyle: 'compact',  
		 //outputStyle konfiguracja zmniejszająca wlk kodu rozmiar pliku
         // sourceComments: true, 
        }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("css"))
})

gulp.task('default', ['scss'], function() { 
    gulp.watch('sass/**/*.scss', ['scss'])
});


 
//npm install gulp --save-dev //dodaje pakiety do package.json
//wykonac to na modułach: gulp, gulp-sass, gulp-sourcemaps.
//npm install gulp --save-dev
//npm install gulp-sass --save-dev
//npm install gulp-sourcemaps --save-dev
// błąd przy source map(instalacji)