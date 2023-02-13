// Leia dois valores inteiros. Depois disso, calcule o produto entre eles e armazene o resultado em uma variável chamada PROD . Imprima o resultado como no exemplo abaixo. Não se esqueça de imprimir o final da linha após o resultado, caso contrário você receberá “Erro de apresentação” .

// Entrada
// O arquivo de entrada contém 2 números inteiros.

// Saída
// Imprima a mensagem "PROD" e PROD conforme exemplo a seguir, com um espaço em branco antes e depois do sinal de igual.

function calculoProduto(numberOne, numberTwo){

  let PROD = numberOne * numberTwo

  return `PROD = ${PROD}`

}
console.log(calculoProduto(3,9))
console.log(calculoProduto(-30,10))
console.log(calculoProduto(0,9))