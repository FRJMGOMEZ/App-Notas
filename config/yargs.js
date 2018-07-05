const descripcion = {
    demand:true,
    alias:'d'};

const completado = {
   default:true,
   alias:'c',
   descripcion:'Chequea si el proceso ha sido completado'}

const argv = require('yargs')

.command('crear','Crear una nueva tarea',{descripcion})

.command('listar','Listar la tarea',{estado:{alias:'e'}})

.command('actualizar','Actualizar la lista de tareas',
{descripcion,completado})

.command('borrar','Borra tarea mal ingresada',{descripcion})

.help()

.argv;


module.exports = {argv};
