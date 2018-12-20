//requireds
const fs = require('fs'); //Este es para el manejo de archivos
const colors = require('colors');


let listarTabla = (base, limite) => { //Función sencilla para listar la tabla
    console.log('======================');
    console.log(`=Tabla de ${base}=`.green);
    console.log('======================');
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i} \n`)
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} NO ES UN NÚMERO`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        };


        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`)
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}