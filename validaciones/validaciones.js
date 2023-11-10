console.log('Hello world')

function esNif(s){
    // this fn can return:
        // 1. It's a NIF
        // 2. Wrong NIF
        // 3. It's a DNI  (num.legth between(6,8) num.minValue = 100000)
        // 0. Invalid input. No es NIF ni DNI
    
        if(s.length != 9){
            return 0;
        }else{
            if(!formatoNIF(s)){
                return 0
            }else{

            }
        }
}
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// falta modularizar codigo para distinguir casos de error
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function formatoNIF(s){
        if(isNaN(s.slice(0,8)) && !("trwagmyfpdxbnjzsqvhlcke".includes(s.charAt(8)))){
            return false;
        }else{return true;}
}
function formatoNIE(s){
    let firstChar = s.charAt(0);
        if(!("XYZLKM".includes(firstChar)) && isNaN(s.slice(1,8)) && !("trwagmyfpdxbnjzsqvhlcke".includes(s.charAt(8)))){
            return 0;
        }else{
            // variable para el caso en el que hay que sumar algo por la letra inicial
            valor = 0;
            switch (firstChar){
                case "Y": 
                    valor = 1;
                    break;
                case "X":
                    valor = 2;
                    break;
                default:
                    valor = 0;
                break;
            }
            num = parseInt(s.substring(1,s.length-1))
            resto = num % 23;
            finalChars = ["T","R","W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J","Z","S","Q","V","H","L","C","K","E"];
            correctFinalChar = finalChars[resto];
            if(s.slice(-1) != correctFinalChar){
                return 2; // es incorrecto
            }else if(num > 100000){
                return 3; // es DNI
            }
        }
}