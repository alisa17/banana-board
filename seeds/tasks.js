
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, taskName: 'create API', description: 'set up an API for our project to use', user_id: 1, completionStatus: 0, userName: 'JV', complexity: 2, project_id: 0},
        {id: 2, taskName: 'React', description: 'create basic react components', user_id: 2, completionStatus: 0, userName: 'JV', complexity: 4, project_id: 0},
        {id: 3, taskName: 'Redux', description: 'plug react components into redux to update state', user_id: 3, completionStatus: 1, userName: 'JV', complexity: 75, project_id: 0},
        {id: 4, taskName: 'CSS', description: 'apply CSS to our project', user_id: 4, completionStatus: 0, userName: 'JV', complexity: 5, project_id: 0},
        {id: 5, taskName: 'find funding', description: 'find funding for app prototype',  completionStatus: 0, complexity: 2, project_id: 1},
        {id: 6, taskName: 'build app', description: 'build new tinder like app', user_id: 2, completionStatus: 0, userName: 'JV', complexity: 4, project_id: 1}
      ]);
    });
 };
