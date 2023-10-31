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
        if(fecha.indexOf("/") == 1){
            console.log("fecha antes: "+fecha)
            fecha = "0".concat(fecha)
            console.log("fecha 10char: "+fecha)
        }
        if(fecha.slice(fecha.indexOf("/")+1).indexOf("/") == 1){
            fecha = fecha.substring(0,3).concat("0",fecha.slice(fecha.indexOf("/")+1))
            console.log("fecha 10char: "+fecha)
        }
    }
    if(isValid){
        if(!(fecha.length == 10 && 
        // ------------------------------------- CONDICIONES GLOBALES -------------------------------------
            // verifica DD
            !isNaN(fecha.substring(0,2)) && 
                "/-".includes(fecha.charAt(2)) && 
            // verifica MM
            !isNaN(fecha.substring(3,5)) && 
                "/-".includes(fecha.charAt(5)) && 
            // verifica AAAA
            !isNaN(fecha.substring(6,10)) 
        )){
            // msg.value = "Error. El formato es DD/MM/AAAA o DD/MM/AA o DD-MM-AAAA o DD-MM-AA\n"
            msg.value = "Error."
            isValid = false
        }else if(fecha.substring(3,5) > 13){
            // msg.value = "Error. El mes no existe"
            msg.value = "Error."
        // ------------------------------------- CONDICIONES MENSUALES -------------------------------------
        }else if( !(max31D(fecha))){
            // msg.value = "Error. El mes tiene un máximo de 31 días"
            msg.value = "Error."
            isValid = false
        }else if( !(max30D(fecha))){
            // msg.value = "Error. El mes tiene un máximo de 30 días"
            msg.value = "Error."
            isValid = false
        // ------------------------------------- CONDICION BISIESTO -------------------------------------
        }else if(
                (esBisiesto(fecha) && fecha.substring(0,2) > 29) && fecha.substring(3,5) == 2 
        ){
            // msg.value = "Error. El año es bisiesto, febrero tiene un maximo de 29 días"
            msg.value = "Error."
            isValid = false
        }else if(!esBisiesto(fecha) && fecha.substring(0,2) > 28 && fecha.substring(3,5) == 2){
            // msg.value = "Error. El año no es bisiesto, febrero tiene un maximo de 28 días"
            msg.value = "Error."
            isValid = false
        // ----------------------------------------------------------------------------------------------
        }else if(fecha.substring(0,2)<1 || fecha.substring(3,5) < 1 || fecha.slice(-4) < 1){
            // msg.value = "Error. Fecha inválida"
            msg.value = "Error."
            isValid = false
        }else{
            isValid = true
            console.log("------------------")
            console.log("día: "+ fecha.substring(0,2))
            console.log("mes: "+ fecha.substring(3,5))
            console.log("año: "+ fecha.substring(6,10))
            console.log("separador 1: "+ fecha.charAt(2))
            console.log("separador 2: "+ fecha.charAt(5))
            console.log("------------------")
        }
    }
    console.log("la fecha es: "+ fecha)
    console.log("respuesta: "+document.formu.msg.value)
    console.log()

}
// ///////////////////// UTILIDADES //////////////////////////////////////////////////////////////////////////////// 
function esBisiesto(n){
    year = n.substring(6,10)
    if(n.substring(3,5) == 2 && year % 4 == 0 && (year % 100 != 0 || (year % 100 == 0 && year % 400 == 0))){
        return true;  
    }else{
        return false;
    }
}
function max31D(fecha){
    if(
    (fecha.substring(3,5) == 1 || fecha.substring(3,5) == 3 || fecha.substring(3,5) == 5 || fecha.substring(3,5) == 7 ||
     fecha.substring(3,5) == 8 || fecha.substring(3,5) == 10 || fecha.substring(3,5) == 12)
    && fecha.substring(0,2) > 31){
        return false
    }else{
        return true
    }
}
function max30D(fecha){
    if((fecha.substring(3,5) == 4 || fecha.substring(3,5) == 6 || fecha.substring(3,5) == 9 || fecha.substring(3,5) == 11) && fecha.substring(0,2) > 30){
        return false
    }else{
        return true
    }
}