// Faça um programa que leia o nome do vendedor, seu salário fixo e o total da venda feita por ele no mês (em dinheiro). Considerando que este vendedor recebe 15% sobre todos os produtos vendidos, escreva o salário final (total) deste vendedor no final do mês, com duas casas decimais.

// - Não se esqueça de imprimir o final da linha após o resultado, caso contrário receberá “ Erro de apresentação ”.

// - Não se esqueça dos espaços em branco.

// Entrada
// O arquivo de entrada contém um texto (primeiro nome do funcionário) e dois valores de dupla precisão, que são o salário do vendedor e o valor total vendido por ele.

//Comissão fixa de 15%

function calculoSalario(nome, salario, vendas){

  Total = salario + (vendas / 100 * 15) 

  return `TOTAL = ${nome} R$ ${Total.toFixed(2)}`

}

console.log(calculoSalario('João', 500, 1230.30))
console.log(calculoSalario('Pedro', 700, 0))
console.log(calculoSalario('Mangojata', 1700, 1230.50))