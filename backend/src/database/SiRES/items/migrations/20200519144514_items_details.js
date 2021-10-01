
exports.up = function(knex) {
    return knex.schema.createTable("items",(table) => {
        table.decimal("id").primary();
        table.string("name").notNullable().primary();
        table.float("value",2).notNullable();
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable("items")
};


