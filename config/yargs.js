const descripcion = {
    demand: true,
    alias: 'd',
    desc: "Descripción de la tarea por hacer"
};

const completado = {
    default: true,
    alias: 'c',
    desc: "Marca como completada o pendiente la tarea"
};

const completa = {
    default: false,
    alias: 'c',
    desc: 'Lista las tareas completas/incompletas por defecto muestra las tareas incompletas'
}

const argv = require('yargs')
    .command('crear', 'Crear una tarea', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea', {
        descripcion
    })
    .command('listar','Lista las tareas',{
        completa
    })
    .boolean('c')
    .help()
    .argv;

module.exports = {
    argv
}