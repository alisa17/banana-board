
exports.up = function(knex, Promise) {
  return knex.schema.createTable('passwords', function (table){
      table.increments('id').primary()
      table.integer('user_id')
      table.string('hash')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('passwords')
 };
