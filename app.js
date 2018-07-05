const {argv} = require('./config/yargs');
const {getListado} = require('./Por hacer/Por hacer');
const {crear} = require('./Por hacer/Por hacer');
const {actualizando} = require('./Por hacer/Por hacer');
const {borrarTarea} = require('./Por hacer/Por hacer');
const colors = require('colors');


let comando = argv._[0];

switch(comando){

  case 'crear' : let tarea = crear(argv.descripcion);
  break;

  case 'listar' : let listado = getListado(argv.estado);


   for (let tarea of listado){
    console.log('==========Por Hacer============'.red);
    console.log(`Descripcion de la tarea:  ${tarea.descripcion}`);}
  break;

  case 'actualizar' : let actualizado = actualizando(argv.descripcion,argv.completado);
  break;

  case 'borrar' : let borrar = borrarTarea(argv.descripcion);
  break;

  default: console.log('Comando no reconocido');
}
