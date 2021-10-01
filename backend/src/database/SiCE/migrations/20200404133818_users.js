
exports.up = function(knex) {
    return knex.schema.createTable("users",(table) => {
        table.string("name").notNullable();
        table.string("passwd").notNullable();
        table.string("username").notNullable().primary();
        table.string("email")
        table.string("phone")
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable("users");

};
