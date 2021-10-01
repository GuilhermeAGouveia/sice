
exports.up = function(knex) {
    return knex.schema.createTable("day",(table) => {
        table.decimal('day_number').primary().notNullable();
        table.string("day_speciefic").notNullable();
        table.string("day_string");
        table.float("value",2);
        table.decimal('n_pessoas');
        table.decimal('n_mesas')
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable("day")
};
