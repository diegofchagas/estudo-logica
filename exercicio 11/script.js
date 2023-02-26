// Você deve fazer um programa que leia um número de ponto flutuante e imprima uma mensagem dizendo a qual dos seguintes intervalos o número pertence: [0,25] (25,50], (50,75], (75,100). número for menor que zero ou maior que 100, o programa deverá imprimir a mensagem “Fora de intervalo” que significa "Fora do Intervalo".

// O símbolo '(' representa maior que. Por exemplo:
// [0,25] indica números entre 0 e 25,0000, incluindo ambos.
// (25,50] indica números maiores que 25 (25,00001) até 50,0000000.

// Entrada
// O arquivo de entrada contém um número de ponto flutuante.







function numeroPertecente(numero){
  
  if(numero >= 0 && numero <= 25){
    return`Intervalo [0,25]`
  }
  else if( numero > 25 && numero <= 50) {
    return `Intervalo (25, 50]`
  }

  else if( numero > 50 && numero <= 75) {
    return `Intervalo (50, 75]`
  }

  else if( numero > 75 && numero <= 100) {
    return `Intervalo (75, 100]`
  }

 else{
  return `Fora de intervalo`
 }


  
}




console.log(numeroPertecente(50))
console.log(numeroPertecente(25))
console.log(numeroPertecente(100))
console.log(numeroPertecente(-25,02))
