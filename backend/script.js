/*
var pedidos = [
    {
      "pedidos_mesa": [
        {
          "name": "Guaraná Lata",
          "quant": 1
        },
        {
          "mesa_number": 9
        }
      ]
    },
    {
      "pedidos_mesa": [
        {
          "name": "Cerveja Lata ",
          "quant": 1
        },
        {
          "mesa_number": 10
        }
      ]
    },
    {
      "pedidos_mesa": [
        {
          "name": "Salada",
          "quant": 1
        },
        {
          "mesa_number": 11
        }
      ]
    }
]

function filterJson(value_filter){
var pedidos_return = []
var teste = 0
for (let i = 0;pedidos.length > i;i++){
    for (let i2 = 0;pedidos[i].pedidos_mesa.length > i2;i2++){
        if (pedidos[i].pedidos_mesa[i2].mesa_number === value_filter){
            console.log
            teste = 1
            console.log(pedidos[i].pedidos_mesa[i2])

            break
        } else {
            teste = 0
        }


    }
    if (teste === 0){
    pedidos_return.push(pedidos[i])
    }
}
    return pedidos_return
}

console.log(filterJson(10))*/


var result = teste => {return teste.substr(0,teste.length - 1)}
console.log(result('olcal'))