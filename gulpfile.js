//automatizando o gulp:

const gulp = require('gulp');
const clean = require('gulp-clean');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');

/*compila o typescript e joga o javascript para o diretorio dist:
(Static esta entre colchetes mostrando que a tarefa scripts precisa aguardar a 
tarefa static ser executada antes)*/
gulp.task('scripts', ['static'], () => {
    const tsResult = tsProject.src()
        .pipe(tsProject());

    return tsResult.js
        .pipe(gulp.dest('dist'));
});

/*copia os arquivos json:
(Clean esta entre colchetes mostrando que a tarefa static precisa aguardar a 
tarefa clean ser executada antes)*/
gulp.task('static', ['clean'], () => {
    return gulp
        .src(['src/**/*.json'])
        .pipe(gulp.dest('dist'));
});

//limpar o diretorio:
gulp.task('clean', () => {
    return gulp
        .src('dist')
        .pipe(clean());  
});

/*ordem das tarefas que serão executadas:
Nao precisei colocar todas as tarefas em ordem, porque em cada parametro eu ja 
tenho qual tarefa cada uma deve esperar antes de ser executada*/
gulp.task('build', ['scripts']);


//automatizando o gulp para ele ter acesso a cada alteraçao:
gulp.task('watch', ['build'], () => {
    return gulp.watch(['src/**/*.ts', 'src/**/*.json'], ['build'],)
//dentro dos colchetes temos os arquivos que o build deve ficar atento para alteraçoes
});

//automatizando a ordem das tarefas do gulp:
gulp.task('default', ['watch']);




