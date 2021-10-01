
exports.up = function(knex) {
  return knex.schema.createTable("cardapio",(table) => {
      table.decimal("position").notNullable().primary();
      table.string("name").notNullable();
      table.float("price",2).notNullable();
    

  })
};

exports.down = function(knex) {
    return knex.schema.dropTable("cardapio");
};
