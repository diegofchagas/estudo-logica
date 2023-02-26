// Leia os quatro valores correspondentes aos eixos x e y de dois pontos do plano, p1 (x1, y1) e p2 (x2, y2) e calcule a distância entre eles, mostrando quatro casas decimais após a vírgula, conforme a fórmula :

// Distância =

// Entrada
// O arquivo de entrada contém duas linhas de dados. O primeiro contém dois valores duplos:  x1 y1 e o segundo também contém dois valores duplos com um dígito após o ponto decimal: x2 y2 .

// Saída
// Calcule e imprima o valor da distância usando a fórmula fornecida, com 4 dígitos após o ponto decimal.


function calculoDistancia(x1,y1,x2,y2){

let resultado = Math.sqrt(Math.pow(x2 - x1,2) + Math.pow(y2 - y1,2))

return `${resultado.toFixed(4)}`
}



console.log(calculoDistancia(1.0, 7.0, 5.0, 9.0))
console.log(calculoDistancia(-2.5, 0.4, 12.1, 7.3))
console.log(calculoDistancia(2.5, -0.4, -12.2, 7.0))



// console.log(2**3)
// console.log(Math.pow(2, 2))
// console.log(Math.sqrt(16))