
function rodProDeBi(){
    let dividendo = prompt(`Digite um valor a ser convertido para um número binário:`)
    let numConvBi = []
    let divisor = 2
    let resto
    
    while(dividendo != 1){
        resto = (dividendo % divisor)
        numConvBi.unshift(`${resto}`)
        dividendo = parseInt(dividendo / divisor)
    }
    numConvBi.unshift(`1`)
    alert(numConvBi.join(""))
}


function rodProBiDe(){
    let numBi = prompt(`Digite um valor a ser convertido para um número decimal:`)
    let numConv = []
    let numBase = 2
    let numExp = 0
    for (let cC = numBi.length - 1; 0 <= cC; cC--) {
        if (numBi.charAt(cC) === `1`) {
            numConv.push(numBase ** numExp)
        }
        numExp++
    }
    let numDec = numConv.reduce((Ttl, soma) => Ttl + soma,0)
    alert(numDec);
}