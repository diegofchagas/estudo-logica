// Lê um valor inteiro correspondente à idade de uma pessoa (em dias) e imprime-o em anos, meses e dias, seguido da respectiva mensagem “ano(s)”, “mes(es)”, “dia(s)”.

// Obs: só para facilitar o cálculo, considere o ano todo com 365 dias e 30 dias todos os meses. Nos casos de teste nunca haverá uma situação que permita 12 meses e alguns dias, como 360, 363 ou 364. Este é apenas um exercício com o objetivo de testar raciocínio matemático simples.

// Entrada
// O arquivo de entrada contém 1 valor inteiro



function calcDiasAnos(dias){

  let ano = Math.floor(dias / 365)
  let diasRestantes = dias % 365 
  let mes = Math.floor(diasRestantes /30)
  let dia = diasRestantes % 30
 
  return `${ano} ano(s),\n${mes}mês(es),\n${dia} dias(s)`
}


// console.log(400 % 365)  =35
// console.log(35 /30) = 1.166 = 1.00
// console.log(35 % 30)  =5 

console.log(calcDiasAnos(400))
console.log(calcDiasAnos(800))
console.log(calcDiasAnos(30))