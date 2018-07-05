const fs = require('fs');


let listadoPorHacer = [];
let listadoTareasCompletadas = [];


const guardarDb = () => {

  let data = JSON.stringify(listadoPorHacer);

  fs.writeFile('DB/Data.json',data,(error)=>{if(error){throw new Error('No se pudo guardar')}});

  }


const cargarDb = ()=>{

 try{ listadoPorHacer = require('../DB/Data.json');}
 catch (error) { listadoPorHacer = []}};



const crear = (descripcion) => {

  cargarDb();

  let porHacer = {descripcion,
                  completado:false};

  listadoPorHacer.push(porHacer);

  guardarDb(porHacer);

  return porHacer;}



const getListado = (estado) => {

cargarDb()

let nuevaLista;

if (estado === 'false') {

nuevaLista=listadoPorHacer.filter(tarea=>{return tarea.completado === false })}

else if (estado === 'true') {

nuevaLista=listadoPorHacer.filter(tarea=>{return tarea.completado === true })}

listadoPorHacer=nuevaLista;

return listadoPorHacer }




const actualizando = (descripcion,completado) => {

cargarDb()

let index = listadoPorHacer.findIndex(tarea=>

  {return tarea.descripcion === descripcion });

if(index >= 0){

  listadoPorHacer[index].completado = completado;
  guardarDb();
  return true }

else{

  return false}}



const borrarTarea = (descripcion)=>{

  cargarDb()

  let nuevoListado = listadoPorHacer.filter(tarea=>{

  return tarea.descripcion !== descripcion;
  })

 if(listadoPorHacer.length === nuevoListado.length){

   return false}

 else{

  listadoPorHacer = nuevoListado;

  guardarDb();

   return true;}
 }


module.exports={crear,getListado,actualizando,borrarTarea};
