console.log('Hello world :3')
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
    console.log('jejej tengo el boton')
    console.log("first number: ",VitNumA);
    console.log("second number: ",VitNumB);

}

