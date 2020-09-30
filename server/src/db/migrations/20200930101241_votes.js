export async function up (knex) {
  await knex.schema.dropTableIfExists('Votes');
  await knex.schema.createTable('Votes', table => {
    table.uuid('id').primary().unique().notNull();
    table.uuid('groupId').references('Groups.id').notNull();
    table.string('description').notNull();
    table.string('status').notNull();
    table.dateTime('createdAt').notNull();
    table.dateTime('updatedAt').notNull();
  });
}

export async function down (knex) {
  await knex.schema.dropTableIfExists('Votes');
}
