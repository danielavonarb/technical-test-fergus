exports.up = (knex) => {
  return knex.schema.createTable('jobs', (table) => {
    table.increments('id').primary()
    table.string('description')
    table.string('contact_details')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.string('status')
    table.varchar('comment')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('jobs')
}
