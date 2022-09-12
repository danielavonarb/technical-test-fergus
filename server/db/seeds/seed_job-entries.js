exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('jobs')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('jobs').insert([
        {
          id: 1,
          description: 'Job A',
          contact_details: 'mail@gmail.com',
          created_at: '',
          status: 'active',
          comment: ['Comment One'],
        },
        {
          id: 2,
          description: 'Job B',
          contact_details: 'mail@gmail.com',
          created_at: '',
          status: 'invoicing',
          comment: ['Comment One'],
        },
        {
          id: 3,
          description: 'Job C',
          contact_details: 'mail@gmail.com',
          created_at: '',
          status: 'completed',
          comment: ['Comment One'],
        },
        {
          id: 4,
          description: 'Job D',
          contact_details: 'mail@gmail.com',
          created_at: '',
          status: 'scheduled',
          comment: ['Comment one'],
        },
      ])
    })
}
