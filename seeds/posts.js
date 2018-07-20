
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {id: 1, title: 'leads', lat: 2.0, long: 5.3, user_id: '1'}
      ]);
    });
};