
exports.up = function(knex) {
    return knex.schema.createTable("year",(table) => {
        table.decimal("year_number").primary().notNullable();
        table.string("year_speciefic").notNullable();
        table.float("value",2)
        table.decimal('n_pessoas');
        table.decimal('n_mesas')
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable("year")
};
