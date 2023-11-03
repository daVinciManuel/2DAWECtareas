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
            if(formatoNIE(s) || formatoNIF(s)){
                return false;
                
            }
        }
}
function formatoNIF(s){
        if(isNaN(s.slice(0,8)) && !("trwagmyfpdxbnjzsqvhlcke".includes(s.charAt(8)))){
            return false;
        }else{return true;}
}
function formatoNIE(s){
    let firstChar = s.charAt(0);
        if(!("XYZLKM".includes(firstChar)) && isNaN(s.slice(1,8)) && !("trwagmyfpdxbnjzsqvhlcke".includes(s.charAt(8)))){
            return false;
        }else{
            switch (firstChar){
                "X"
            }
        }
}