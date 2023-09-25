console.log('hello')
window.onload = comienzo;

function comienzo(){ 
    document.formulario.boton.onclick = tratar;
 }
function tratar(){
// RECIBO LOS VALORES DEL TEXTAREA Y LOS CONVIERTO A INT
    let VstNumA = document.formulario.inicio.value;
    let VstNumB = document.formulario.final.value;
    let VitNumA = parseInt(VstNumA,10);
    let VitNumB = parseInt(VstNumB,10);
    
// SI EL PRIMER NUMERO ES MAYOR QUE EL SEGUNDO LOS INVIERTO:
    if(VitNumA > VitNumB){
        aux = VitNumA;
        VitNumA = VitNumB;
        VitNumB = aux;
    }
    console.log("first number: ",VitNumA);
    console.log("second number: ",VitNumB);

    let VstSolucion = "|";

    for(let i = VitNumA; i <= VitNumB; i++){
        if(numeroPrimo(i)){
            VstSolucion += i.toString() + "|";
        }
    }
    console.log(VstSolucion)
    document.formulario.resultado.value = VstSolucion 
}

function numeroPrimo(numero) {
    let VboPrimo = true;
    for (let i = 2; i < numero; i++){
        if(numero % i == 0)
            VboPrimo = false
    }
    console.log(VboPrimo, numero);
    
    return VboPrimo;
}