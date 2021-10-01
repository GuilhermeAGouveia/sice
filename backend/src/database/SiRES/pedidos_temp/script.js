
const knex_var = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './pedidos_temp.db',
  },
});

async function exec(){
  var teste = await knex_var.schema.createTable("mesa_pendente",(table) =>{

      table.decimal("number").primary().notNullable();
     
     
  })
  console.log(teste)
  }


async function exec2() {
try {
var teste = await knex_var("mesa_pendente").select("*")
console.log(teste)

} catch (error) {
console.log("error")
}

}




async function exec3() {
  var teste = await knex_var("mesa_pendente").insert({
      "number":1
      
      

  })
  

 }
 async function exec4() {
  var teste = await knex_var.schema.dropTable("mesas_pendente")
  console.log(teste)

 }

exec()
exec3()
exec2()