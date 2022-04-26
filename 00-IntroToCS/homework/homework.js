"use strict";

function BinarioADecimal(num) {
    let array = num.split("");
    let reverseArray = array.reverse();
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma = suma + Math.pow(2, i) * array[i];
    }
    return suma;
}
//en vez de dar vuelta el array se puede recorrer a la inversa con 
//array.length -1 (posicion del ultimo elemento) - i(se le va sacando dependiendo las vueltas)

function DecimalABinario(num) {
    let binario = [num % 2];
    let result = num;
    do {
        result = Math.floor(result / 2);
        binario = [...binario, result % 2];
    } while (result > 1);

    binario = binario.reverse().join('');
    return binario;
}

/* function DecimalABinario(num) {
    let binario = [];
    
    while(num > 0){
        binario.unshift(num % 2); //esta propiedad va guardando los resultados adelante
        num = Math.floor(num/2);
    } 
    return binario;
} */




// No se pueden usar: 
// parseInt
// toString



module.exports = {
    BinarioADecimal,
    DecimalABinario,
};