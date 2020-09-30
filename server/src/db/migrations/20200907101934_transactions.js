export async function up (knex) {
  await knex.schema.dropTableIfExists('Transactions');
  await knex.schema.createTable('Transactions', table => {
    table.uuid('id').primary().unique().notNull();
    table.uuid('groupId').references('Groups.id').notNull();
    table.uuid('creditorId').references('Users.id').notNull();
    table.uuid('debtorId').references('Users.id').notNull();
    table.integer('value').unsigned().notNull();
    table.string('status').notNull();
    table.string('usersInFavor');
    table.string('usersAgainst');
    table.dateTime('createdAt').notNull();
    table.dateTime('updatedAt').notNull();
  });
}

export async function down (knex) {
  await knex.schema.dropTableIfExists('Transactions');
}
