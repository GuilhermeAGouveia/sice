const { randomBytes } = require("crypto");
const { exit } = require("process");
if (process.argv[2] === undefined){
    console.log('Necessario parametro com o tamanha do vetor a ser gerado:\nExemplo: node ./sort.js 10')
    exit(1)
}
function BubbleSort(vet){
    

    console.log('BubbleSort----Start')
    console.time('BubbleSort')
    var tam = vet.length
    var aux = 0
    for(i = tam; i > 0;i--){
        for (j = 0;j < i;j++){
            if (vet[j] > vet[j + 1]){
                aux = vet[j]
                vet[j] = vet[j + 1]
                vet[j + 1] = aux   
            }
        }

    }
    console.log(vet)
    console.timeEnd('BubbleSort')

    console.log('BubbleSort----end')

    

}

function InsertionSort(vet){
    console.log('InsertionSort----Start')
    console.time('InsertionSort')
    var tam = vet.length
  
    
    var aux = 0
    for (i = 1; i < tam; i++){
        aux = vet[i]
        for (j = i - 1; j >= 0 && vet[j] > aux; j--){
            vet[j + 1] = vet[j]
        }
        vet[j + 1] = aux

    }
    console.log(vet)
    console.timeEnd('InsertionSort')

    console.log('InsertionSort----End')

    
}

function SelectionSort(vet){
    console.log('SelectionSort----Start')
    console.time('SelectionSort')
    var tam = vet.length 
  
    var aux = 0
   
    for (i = 0; i < tam - 1; i++){
        aux = vet[i]
        var min_index = i
        for (j = i + 1; j < tam; j++){
           if (aux > vet[j]){
               aux = vet[j]
               min_index = j
           }
        }
        vet[min_index] = vet[i]
        vet[i] = aux

    }
    console.log(vet)
    console.timeEnd('SelectionSort')

    console.log('SelectionSort----End')

    
}

function GerarVetor(tamanho){
    var vet = []
    for (i = 0;i <= tamanho;i++){
        vet.push(Math.floor(Math.random() * (parseInt(process.argv[3]) - 1) + 1))
    }
    return vet
}

var vetor = GerarVetor(parseInt(process.argv[2]))
console.log('vetor gerado')
console.log(vetor)
console.log('\n\n')
BubbleSort(vetor)
console.log('\n\n')
InsertionSort(vetor)
console.log('\n\n')
SelectionSort(vetor)