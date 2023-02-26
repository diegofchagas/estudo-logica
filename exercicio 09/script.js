
// Lê um valor inteiro, que é a duração em segundos de um determinado evento em uma fábrica, e informa-o expresso em horas:minutos:segundos.

// Entrada
// O arquivo de entrada contém um inteiro N .

// Saída
// Imprima o tempo de leitura no arquivo de entrada (segundos) convertido em horas:minutos:segundos como no exemplo a seguir.

// n = numero inteiro


// 1hora igual a = 60 minutos
// 1 minutos  a = 60 segundos 
// uma hora tem 60* 60 = 3600 segundos

function duracaoEvento(n){

  let horas = Math.floor(n / 3600)

  let minutos = Math.floor((n % 3600) / 60)

  let segundos = n % 60

  

  return `${horas} : ${minutos} : ${segundos}`
}

console.log(duracaoEvento(556))
console.log(duracaoEvento(1))
console.log(duracaoEvento(140153))




