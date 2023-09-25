console.log('hello world')

window.onload = comienzo;


// const textarea = document.getElementsByName("box");


// window.onclick = comienzo;
function comienzo(){
    let VstResuelto="|";
    for(let i = 2; i < 100; i++){
        if(numeroPrimo(i)){
            VstResuelto += i.toString() + "|";
        }
    }
    document.formulario.box.value = VstResuelto;
}

function numeroPrimo(numero) {
    let VboPrimo = true;
    for (let i = 2; i < numero; ++i){
        if(numero % i == 0)
            VboPrimo = false
    }
    // console.log(VboPrimo, numero);
    
    return VboPrimo;
}