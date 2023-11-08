    //Esta línea  de código importamos un módulo llamado 'functions.js' utilizando la función require. El módulo 'functions.js' 
    const functions = require('./functions.js')
    //Imprime en la consola el contenido del módulo 'functions.js' que incluye todas las funciones y variables exportadas desde ese archivo.
    console.log(functions);

 //Llamamos a la función llamada add que se encuentra en el módulo 'functions.js' y le doy valor de 10 y 1. Luego, imprime el resultado de esta función en la consola
console.log(functions.add(10,1));
// Llama a la función llamada substract que se encuentra en el módulo 'functions.js' y  le doy valor de 10 y 8. Luego, imprime el resultado de esta función en la consola.
console.log(functions.substract(10,8));
//Llama a una función llamada multiply que se encuentra en el módulo 'functions.js' y pasa los argumentos 8 y 6. Luego, imprime el resultado de esta función en la consola.
console.log(functions.multiply(152,8));
//Llamamos a la función llamada divide que se encuentra en el módulo 'functions.js' y pasa los argumentos 8 y 2. Luego, imprime el resultado de esta función en la consola.
console.log(functions.divide(2,5));
