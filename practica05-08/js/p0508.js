console.log("Hello world")


window.onload = () => {
    document.formu.btn.onclick = verificar
}
// mmmmmain.
// -----------------------------------------------------
function verificar() {
    const fecha = document.formu.fecha.value
    document.formu.msg.value = "Hello... it's there anybody in there...? "
    document.formu.msg.value = document.formu.msg.value.concat(", "+document.formu.fecha.value)
    console.log(document.formu.msg.value)
    console.log(fecha)
}