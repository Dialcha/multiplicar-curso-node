const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs') //Línea donde se hace la importación del YARGS
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea el documento de texto con la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}