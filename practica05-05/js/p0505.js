console.log('Hello World')

window.onload = () => {

document.formulario.btn.onclick = calcular;
}
    const consonantes = text => Array.from(text.toLowerCase()).filter(letter => "qwrtypsdfghjklñzxcvbnm".includes(letter)).length;
    const vocales = text => Array.from(text.toLowerCase()).filter(letter => "aeoiu".includes(letter)).length;
    const vocalX = (text,x) => Array.from(text.toLowerCase()).filter(letter => x.toLowerCase().includes(letter)).length;
function calcular(){
    var input = document.formulario.cadena.value;
    input = input.toString();

    let solucion = vocalX(input,'i')
    let debugConso = consonantes(input)

    // console.log(vocalX(input,'i')+". en el texto: "+input)
    console.log(typeof solucion)
    console.log(debugConso)
    document.formulario.numConsonantes.value = debugConso;
    document.formulario.vocales.value = vocales(input);
    document.formulario.vocalA.value = vocalX(input,'a');
    document.formulario.vocalE.value = vocalX(input,'e');
    document.formulario.vocalI.value = vocalX(input,'i');
    document.formulario.vocalO.value = vocalX(input,'o');
    document.formulario.vocalU.value = vocalX(input,'u');
}
function rmWhiteSpace(t){
    newString = "";
    newString = t.replace(" ","")
    if(newString != t){
        newString = rmWhiteSpace(newString);
    }else{
        return newString
    }
}