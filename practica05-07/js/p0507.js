console.log('Hello world')

window.onload = () => {
    document.formu.btn.onclick = verificar
}
const nombre = document.formu.nombre.value
function verificar() {
    // console.log(document.formu.nombre.value)
    // document.formu.msg.value = nombre;

    letraInicioYFinal(document.formu.nombre.value)
}
function letraInicioYFinal(t) {
    let firstChar = t.charAt(0)
    let lastChar = t.charAt(t.length - 1)
    debug = true
    if(debug){
        console.log()
        console.log("first: " + firstChar + " es una letra " + esLetra(firstChar))
        console.log("last: " + lastChar + " es una letra " + esLetra(lastChar))
        console.log("letraInicioYFinal: " + t)
    }
    // QUEDA HACER EL MENSAJE DE ERROR !!!
    if(!esLetra(firstChar) || !esLetra(lastChar)){

        let error = esLetra(firstChar) ? lastChar : firstChar 
        document.formu.msg.value = error;
        // document.formu.msg.value = "El caracter " + !esLetra(firstChar) ? firstChar : 'último' + " no es una letra"
    }
}
// this fn returns true or false wether the x is a letter or not 
function esLetra(x) {
    let letras = "çqwertyuiiopasdfghjklñzxcvbnmáéíóúü"
    if (letras.includes(x.toLowerCase())) {
        return true
    } else {
        return false
    }
}