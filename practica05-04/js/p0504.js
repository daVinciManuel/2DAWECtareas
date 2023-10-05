console.log('Hello world');

window.onload = function (){
    document.formulario.btn.onclick = tratar;
}
tratar();
function tratar(){
    
    const VstNumber = document.formulario.decimal.value;
    const VitNumber = parseInt(VstNumber);
    // console.log(VitNumber)
    // console.log('Hello I\'m from tratar()');
    
    let nBinario = binaryOf(VitNumber)
    let nOctal = octalOf(VitNumber)
    let nHex = hexOf(VitNumber)
    document.formulario.binario.value = nBinario;
    document.formulario.octal.value = nOctal;
    document.formulario.hexadecimal.value = nHex;
}

// ------------- CONVIERTE A BINARIO ----------------------
function binaryOf(number){
    if(number == 0){
        solucion = 0;
    } else{
        solucion = "";
        while(number > 0.999){
            resto = (number % 2);
            solucion = resto.toString() + solucion.toString();
            number = Math.trunc(number / 2);
            console.log("solucion: "+solucion+"resto: ",resto,"numbers: ",number)
            console.log(number);
        }
    }
    return solucion;
}

// ------------- CONVIERTE A OCTAL ----------------------
function octalOf(number){
    if(number == 0){
        solucion = 0;
    } else{
        solucion = "";
        while(number > 0.999){
            resto = (number % 8);
            solucion = resto.toString() + solucion.toString();
            number = Math.trunc(number / 8);
        }
    }
    return solucion;
}

// ------------- CONVIERTE A HEXADECIMAL ----------------------
function hexOf(number){
    solucion = number.toString(16);
    return solucion;
}