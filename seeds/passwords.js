
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('passwords').del()
    .then(function () {
      // Inserts seed entries
      return knex('passwords').insert([
        {id: 1, user_id: 1, hash: '$2a$12$cF1k0nGdH8n2Y1rVvY/unenaH7sEk8oEYpLV0Er39xd936lkSfQVy'},
        {id: 2, user_id: 2, hash: '$2a$12$cF1k0nGdH8n2Y1rVvY/unenaH7sEk8oEYpLV0Er39xd936lkSfQVy'},
        {id: 3, user_id: 3, hash: '$2a$12$cF1k0nGdH8n2Y1rVvY/unenaH7sEk8oEYpLV0Er39xd936lkSfQVy'}
            ]);
    });
 };
