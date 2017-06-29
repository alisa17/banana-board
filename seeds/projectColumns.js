exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projectColumns').del()
    .then(function () {
      // Inserts seed entries
      return knex('projectColumns').insert([
        {id: 1, project_id: 0, column_name: 'To Do', column_value: 0},
        {id: 2, project_id: 0, column_name: 'In Progress', column_value: 1},
        {id: 3, project_id: 0, column_name: 'Blocked', column_value: 2},
        {id: 4, project_id: 0, column_name: 'Completed', column_value: 3},
        {id: 5, project_id: 1, column_name: 'To Do', column_value: 0},
        {id: 6, project_id: 1, column_name: 'Completed', column_value: 1},
      ]);
    });
 };
