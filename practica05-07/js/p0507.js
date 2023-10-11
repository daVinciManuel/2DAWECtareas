console.log('Hello world')

window.onload = () => {
    document.formu.btn.onclick = verificar
}
const nombre = document.formu.nombre.value
function verificar() {
    // console.log(document.formu.nombre.value)
    // document.formu.msg.value = nombre;

    letraInicioYFinal(document.formu.nombre.value)
    lengthValidate(document.formu.nombre.value)
}
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
        if(!document.formu.msg.value.includes("1.")){
            document.formu.msg.value = document.formu.msg.value.concat("\n1. Debe empezar y terminar por un caracter del abecedario.");
        }
    }else{
        document.formu.msg.value = document.formu.msg.value.replaceAll("1. Debe empezar y terminar por un caracter del abecedario.","")
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
// LONGITUD MINIMA 3 CHAR
function lengthValidate(t){
    if(t.length < 3){
        if(!document.formu.msg.value.includes("2."))
            document.formu.msg.value = document.formu.msg.value.concat("\n 2. Debe contener más de 3 caracteres.")
    }else{
        document.formu.msg.value = document.formu.msg.value.replaceAll("2. Debe contener más de 3 caracteres.","")
    }
}