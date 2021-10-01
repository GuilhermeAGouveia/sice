const conn1 = require("./connection")

const conn2 = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: '../../SiCE/sice.db',
    },
  });

/*var items = [{
    "id":1,
    "name":"Refeição",
    "value":8.00
},
{
    "id":2,
    "name":"Porção de Feijao",
    "value":8.00
},
{
    "id":3,
    "name":"Porção de Arroz",
    "value":8.00
}]*/
async function insert() {
    
    var items = await conn2("cardapio")
    console.log(items)
for (let i = 0;i < items.length;i++){
    var {position,name,price} = items[i]
    await conn1("items").insert({
        "id":position,
        "name":name,
        "value":price
    })
}
}



async function list() {
    var valor = await conn1("items").select("*")
    console.log(valor)
}
list()
