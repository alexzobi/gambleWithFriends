export async function up (knex) {
  await knex.schema.dropTableIfExists('Bets');
  await knex.schema.createTable('Bets', table => {
    table.uuid('id').primary().unique().notNull();
    table.uuid('groupId').references('Groups.id').notNull();
    table.uuid('userA').references('Users.id').notNull();
    table.uuid('userB').references('Users.id').notNull();
    table.integer('userAOdds').notNull();
    table.integer('userBOdds').notNull();
    table.integer('value').notNull();
    table.string('status').notNull();
    table.string('description').notNull();
    table.dateTime('createdAt').notNull();
    table.dateTime('updatedAt').notNull();
  });
}

export async function down (knex) {
  await knex.schema.dropTableIfExists('Bets');
}
