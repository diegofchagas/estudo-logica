// Neste problema você deve ler um valor inteiro e calcular o menor número possível de notas em que o valor pode ser decomposto. As notas possíveis são 100, 50, 20, 10, 5, 2 e 1. Imprima o valor lido e a lista de notas.

// Entrada
// O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).

// Saída
// Imprima o número lido e a quantidade mínima de cada cédula necessária em língua portuguesa, conforme exemplo dado. Não se esqueça de imprimir o final da linha após cada linha, caso contrário, você receberá “Erro de apresentação” 




const notas =[ 100,50,20,10,5,2,1]

function calcularNumeroNotas(valor){
 console.log(valor)
  for(let i =0; i< notas.length; i++){
  
    const quantidade = Math.floor(valor/notas[i])
    console.log(`${quantidade} nota(s) de R$ ${notas[i]},00`)
     valor= valor % notas[i]
    
    
  }
}

calcularNumeroNotas(576)
calcularNumeroNotas(11257)
calcularNumeroNotas(503)










