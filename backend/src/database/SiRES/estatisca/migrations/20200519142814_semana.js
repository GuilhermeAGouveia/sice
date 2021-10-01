
exports.up = function(knex) {
    return knex.schema.createTable("week",(table) => {
        table.decimal("week_number").primary().notNullable();
        table.string("week_speciefic").notNullable();
        table.float("value",2);
        table.decimal('n_pessoas');
        table.decimal('n_mesas')
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable("week")
};
