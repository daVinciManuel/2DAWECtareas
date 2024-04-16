console.log('Hello World');
window.onload = inicio;

function inicio(){
    document.formulario.onsubmit = validar;
    document.formulario.minuni.onkeypress = soloDigitos;
    document.formulario.unidades.onkeypress = soloDigitos;
    document.formulario.localidad.onkeypress = soloLetras;

    let elem = document.formulario.elements;
    for(let i = 0; i < elem.length; i++){
        if(elem[i].type == "text"){
            elem[i].onfocus = entrar;
            elem[i].onblur = salir;
        }

    }

    debug = true;
    if(debug){
    }
}
function soloDigitos(evento){
    let myEvent = evento || window.event;
    let digito = String.fromCharCode(myEvent.charCode);
    let admitido = true;
    if(digito < "0" || digito > "9"){
        admitido = false;
    }
    return admitido;
}

function soloLetras(evento){
    let myEvent = evento || window.event;
    let letra = String.fromCharCode(myEvent.charCode).toLowerCase();
    let admitido = true;
    if(letra < "a" || letra > "z"){
        if(!("áéíóú".includes(letra)) && letra != "ñ"){
            admitido = false;
        }
    }
    return admitido;
}
function entrar(evento){
    let myEvent = evento || window.event;
    myEvent.target.value = "";
    myEvent.target.style.color = "yellow";
    myEvent.target.style.backgroundColor = "red";
}

function salir(evento){
    let myEvent = evento || window.event;
    myEvent.target.style.color = "black";
    myEvent.target.style.backgroundColor = "white";
}
// --------------------------------------- VALIDACIONES --------------------------------------------------------
function validar(){
    correcto = true;
    // 1. Codigo producto beetwen 7,11 chars
    if(!validaCodigo()){
        alert("El codigo debe tener entre 7 y 11 caracteres");
        correcto = false;
    }
    // 2. Decripcion producto 

    return correcto;
}

function validaCodigo(){
    let codigo = document.formulario.codigo.value;
    admitido = true;    
    if(codigo.length < 7 || codigo.length > 11){
        admitido = false;    
    }
    return admitido;
}