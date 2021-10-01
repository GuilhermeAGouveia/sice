
const conn = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: './sice.db',
    },
  });
async function main(){

var select = await conn("cardapio_verse").select()
console.log(select)

}

main()