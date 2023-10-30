console.log("Hello world")


window.onload = () => {
    document.formu.btn.onclick = verificar
}
// mmmmmain.
// -----------------------------------------------------

function verificar() {
    errorMsg = ""
    const msg = document.formu.msg
    fecha = document.formu.fecha.value
    isValid = true
    if(fecha.length > 10){
        isValid = false
    }else{
        validChars = "1234567890/-"
        fecha.trim().split("").forEach(char => {
            if (!(validChars.includes(char))) {
                isValid = false
            }else{
                isValid = true
            }
        });
    }
    if(isValid){
        if(fecha.length == 10 && 
        // ------------------------------------- CONDICIONES GLOBALES -------------------------------------
            // verifica DD
            !isNaN(fecha.substring(0,2)) && 
            fecha.substring(0,2) < 32 &&
                "/-".includes(fecha.charAt(2)) && 
            // verifica MM
            !isNaN(fecha.substring(3,5)) && 
            fecha.substring(3,5) < 13 &&
                "/-".includes(fecha.charAt(5)) && 
            // verifica AAAA
            !isNaN(fecha.substring(6,10)) &&
        // ------------------------------------- CONDICIONES MENSUALES -------------------------------------
                // meses de 31 dias
           ((fecha.substring(3,5) == 1 || fecha.substring(3,5) == 3 || fecha.substring(3,5) == 5 || fecha.substring(3,5) == 7 || fecha.substring(3,5) == 8 || fecha.substring(3,5) == 10 || fecha.substring(3,5) == 12)
            && fecha.substring(0,2) == 31)
        ){
            console.log("it's 200")
        }else{
            isValid = false
            console.log("------------------")
            console.log("día: "+ fecha.substring(0,2))
            console.log("mes: "+ fecha.substring(3,5))
            console.log("año: "+ fecha.substring(6,10))
            console.log("separador 1: "+ fecha.charAt(2))
            console.log("separador 2: "+ fecha.charAt(5))
            console.log("------------------")
        }
    }
    msg.value = isValid?"no error": "Error. el formato es DD/MM/AAAA o DD/MM/AA o DD-MM-AAAA o DD-MM-AA\n"
    console.log("la fecha es: "+ fecha)
    console.log("fecha es de tipo: "+typeof(fecha))
    console.log("respuesta: "+document.formu.msg.value)
    console.log("")

}