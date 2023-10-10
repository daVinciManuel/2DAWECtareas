console.log('Hello world')

window.onload = () => {
    document.formu.btn.onclick = verificar
}
function verificar() {
    const nombre = document.formu.nombre.value
    console.log(document.formu.nombre.value)
    document.formu.msg.value = rmWhiteSpace(nombre);
    console.log(rmWhiteSpace(nombre))
}
// function rmWhiteSpace(t){
//     newString = "";
//     newString = t.replace(" ","")
//     if(newString != t){
//         newString = rmWhiteSpace(newString);
//         return newString
//     }else{
//         return newString
//     }
// }
