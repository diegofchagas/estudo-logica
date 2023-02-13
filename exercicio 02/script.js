// A fórmula para calcular a área de uma circunferência é definida como A = π . R 2 . Considerando para este problema que π = 3,14159 :

// Calcule a área usando a fórmula fornecida na descrição do problema.

// Entrada
// A entrada contém um valor de ponto flutuante (precisão dupla), que é a variável R .

// Saída
// Apresente a mensagem "A=" seguida do valor da variável, conforme exemplo abaixo, com quatro casas após a vírgula. Use todas as variáveis ​​de precisão dupla. Como todos os problemas, não se esqueça de imprimir o final da linha após o resultado, caso contrário, você receberá "Erro de apresentação"

function calcularArea(r){

  A = Math.PI.toFixed(5) * (r ** 2)

  return `A = ${A.toFixed(4)}`

}

console.log(calcularArea(2,00))
console.log(calcularArea(100,64))
console.log(calcularArea(150,00))

