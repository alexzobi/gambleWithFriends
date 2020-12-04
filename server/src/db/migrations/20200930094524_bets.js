export async function up (knex) {
  await knex.schema.dropTableIfExists('Bets');
  await knex.schema.createTable('Bets', table => {
    table.uuid('id').primary().unique().notNull();
    table.string('name').notNull();
    table.string('description');
    table.integer('odds').notNull().defaultTo(1);
    table.integer('value').notNull();
    table.string('status').notNull().defaultTo('PENDING');
    table.uuid('better').references('Users.id').notNull();
    table.uuid('bettee').references('Users.id').notNull();
    table.uuid('groupId').references('Groups.id').notNull();
    table.dateTime('createdAt').notNull();
    table.dateTime('updatedAt').notNull();
  });
}

export async function down (knex) {
  await knex.schema.dropTableIfExists('Bets');
}
