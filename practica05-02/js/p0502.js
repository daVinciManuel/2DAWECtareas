console.log('hello world')

window.onload = comienzo;


// const textarea = document.getElementsByName("box");


// window.onclick = comienzo;
function comienzo(){
    let VstResuelto="|";
    let i = 2;
    let contador = 0;
    while(contador<100){
        if(numeroPrimo(i)){
            VstResuelto += i.toString() + "|";
        }
        contador++;
        i++;
        console.log(contador)
    }
    document.formulario.box.value = VstResuelto;
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