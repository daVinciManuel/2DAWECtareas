console.log("Hello world")


window.onload = () => {
    document.formu.btn.onclick = verificar
}
// mmmmmain.
// -----------------------------------------------------
function verificar() {
    const msg = document.formu.msg
    const fecha = document.formu.fecha.value

    msg.value = "Introduzca una fecha valida\n(dd/mm/aaaa)\n"
    msg.value = msg.concat(""+fecha)
    console.log(document.formu.msg.value)
    console.log(fecha)
    // SOLO FALTA VALIDAR LA FECHA CONTANDO AÑOS BISIESTOS ASLDKFJAKLSDFJASDKLFJASDKFJASDFKL
}