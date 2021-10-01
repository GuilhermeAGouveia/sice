
const knex_var = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './mesa_temp.db',
  },
});

async function exec(){
  var teste = await knex_var.schema.createTable("mesas_em_uso",(table) =>{

      table.decimal("number").primary().notNullable();
     
     
  })
  console.log(teste)
  }


async function exec2() {
try {
var teste = await knex_var("mesas_em_uso").select("*")
console.log(teste)

} catch (error) {
console.log("error")
}

}




async function exec3() {
  var teste = await knex_var("mesas_em_uso").insert({
      "number":13
      
      

  })
  

 }
 async function exec4() {
  var teste = await knex_var.schema.dropTable("mesas_em_uso")
  console.log(teste)

 }

 async function exec5(){
  var teste = await knex_var.schema.alterTable('mesas_em_uso',(table) => {table.decimal('')})
  console.log(teste)


 }


