// Calcule o consumo médio de um automóvel tendo em conta a distância total percorrida (em Km) e o total de combustível gasto (em litros).

// Entrada
// O arquivo de entrada contém dois valores: um valor inteiro X representando a distância total (em Km) e o segundo é um número de ponto flutuante Y  representando o total de combustível gasto, com um dígito após o ponto decimal.

// Saída
// Apresente um valor que represente o consumo médio de um carro com 3 dígitos após a vírgula, seguido da mensagem "km/l".

// x = distancia em km
//Y = total de combustivel

function calculoConsumoMedio(x,y){

  let consumo = x/y
  
  return `${consumo.toFixed(3)} km/l`
 
}

console.log(calculoConsumoMedio(500, 35))
console.log(calculoConsumoMedio(2254, 124.4))
console.log(calculoConsumoMedio(4554, 464.6))