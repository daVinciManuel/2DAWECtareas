console.log('Hello world')
window.onload = () => {
    document.formu.btn.onclick = calcular;
}
const numCoinc = (text,x) => Array.from(text.toLowerCase()).filter(letter => x.toLowerCase().includes(letter)).length;

function calcular(){
    const input = document.formu.textIn.value;
    const subtext = document.formu.textSearch.value;
    document.formu.resultado.value = numCoinc(input,subtext);
    console.log("input: "+input)
    console.log("inputSearch: " + subtext)
    console.log(numCoinc(input,subtext));
    
}
