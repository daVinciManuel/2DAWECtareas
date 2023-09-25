window.onload = comienzo;

function comienzo() {
    let VstResuelto = "";
    for (let i = 0; i < 100; i++) {
        if (numeroPrimo(indice)) {
            VstResuelto += indice.toString() + "|";
        }
    }
    // document.formulario.text-area.value = VstResuelto;

}

function numeroPrimo(numero) {
    let VboPrimo = true;
    for (let i = numero; i > 1; i++){
        if(numero % i == 0)
            VboPrimo = false
    }
        
    return VboPrimo;
}

function comienzo(){
    document.formulario.button.onclick = tratar;
}
function tratar()    {
    let VstUno = document.formulario.inicio.value;
    let VstDos = document.formulario.final.value;
    let VitUno = parseInt(VstUno,10);
}
