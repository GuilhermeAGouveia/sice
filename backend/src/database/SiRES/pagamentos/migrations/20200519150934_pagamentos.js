
exports.up = function(knex) {
  return knex.schema.createTable("pagos",(table) => {
      table.string("name_client").notNullable().default("client")
      table.float("value",2)
      table.string("date")
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable("pagos")
};
