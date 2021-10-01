
exports.up = function(knex) {
    return knex.schema.createTable("moth",(table) => {
        table.decimal("moth_number").primary().notNullable();
        table.string("moth_speciefic").notNullable();
        table.string('moth_string')
        table.float("value",2);
        table.decimal('n_pessoas');
        table.decimal('n_mesas')
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable("moth")
};
