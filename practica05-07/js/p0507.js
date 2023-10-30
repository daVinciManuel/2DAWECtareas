console.log('Hello world')

window.onload = () => {
    document.formu.btn.onclick = verificar
}
// const nombre = document.formu.nombre.value
// mmmmmain.
// -----------------------------------------------------
function verificar() {
// (1) 
    if(!letraInicioYFinal(document.formu.nombre.value)){
        if(!document.formu.msg.value.includes("1.")){
            document.formu.msg.value = document.formu.msg.value.concat("\n1. Debe empezar y terminar por un caracter del abecedario.");
        }
    }else{
        document.formu.msg.value = document.formu.msg.value.replaceAll("1. Debe empezar y terminar por un caracter del abecedario.","")
    }
// (2) 
    if(!lengthValidate(document.formu.nombre.value)){
        if(!document.formu.msg.value.includes("2."))
        document.formu.msg.value = document.formu.msg.value.concat("\n 2. Debe contener más de 3 caracteres.")
    }else{
        document.formu.msg.value = document.formu.msg.value.replaceAll("2. Debe contener más de 3 caracteres.","")
    }
// (3)
    if(!charsValid(document.formu.nombre.value)){
        if(!document.formu.msg.value.includes("3."))
            document.formu.msg.value = document.formu.msg.value.concat("\n3. Solo puede contener un caracter letra, \"º\", \"ª\" o \"-\" entre el primer y último caracter");
    }else{
        document.formu.msg.value = document.formu.msg.value.replaceAll("3. Solo puede contener un caracter letra, \"º\", \"ª\" o \"-\" entre el primer y último caracter","");
}
// (4)
    if(!longitudValida(document.formu.nombre.value)){
        if(!document.formu.msg.value.includes("4."))
            document.formu.msg.value = document.formu.msg.value.concat("\n4. Debe tener minimo 3 caracteres y máximo 27");
    }else{
        document.formu.msg.value = document.formu.msg.value.replaceAll("4. Debe tener minimo 3 caracteres y máximo 27","");
    }
    

}
// __________________________________________________________________________________________________
// Validacion parte 1.
function letraInicioYFinal(t) {
    let firstChar = t.charAt(0)
    let lastChar = t.charAt(t.length - 1)
    debug = false; 
    if(debug){
        console.log()
        console.log("first: " + firstChar + " es una letra " + esLetra(firstChar))
        console.log("last: " + lastChar + " es una letra " + esLetra(lastChar))
        console.log("letraInicioYFinal: " + t)
    }

    // MENSAJE DE ERROR:
    if(!esLetra(firstChar) || !esLetra(lastChar)){
        return false;
    }else{
        return true;
    }
}
// this fn returns true or false wether the x is a letter or not 
function esLetra(x) {
    let letras = "qwertyuiiopasdfghjklñzxcvbnmáéíóúüç"
    if (letras.includes(x.toLowerCase())) {
        return true
    } else {
        return false
    }
}
// -------------------------------------------------------------------------------------------
// Validacion parte 2.
// LONGITUD MINIMA 3 CHAR
function lengthValidate(t){
    if(t.length < 3){
        return false;
    }else{
        return true;
    }
}
// -------------------------------------------------------------------------------------------
// Validacion parte 3.
function charsValid(t){
    console.log(t.substring(1,t.length-1))
    textoMedio = t.substring(1,t.length-1)
    valid = true;
    letters = textoMedio.split("")
    letters.forEach(l => {
       if(!(esLetra(l) || l == "º" || l == "ª" || l == "-")) {
            valid = false;
       }
    });
    if(valid){
        return true;
    }else{
        return false;
    }
}
// -------------------------------------------------------------------------------------------
// Validacion parte 4.
function longitudValida(t){
   if(t.length >= 3 && t.length <= 27){
    return true;
   }else{
    return false;
   }
}