export async function up (knex) {
  await knex.schema.dropTableIfExists('Awards');
  await knex.schema.createTable('Awards', table => {
    table.uuid('id').primary().unique().notNull();
    table.string('name').notNull();
    table.string('description');
    table.integer('value').unsigned().notNull();
    table.json('approvers').defaultTo('[]');
    table.uuid('awarder').references('Users.id').notNull();
    table.uuid('awardee').references('Users.id').notNull();
    table.uuid('groupId').references('Groups.id').notNull();
    table.dateTime('createdAt').notNull();
    table.dateTime('updatedAt').notNull();
  });
}

export async function down (knex) {
  await knex.schema.dropTableIfExists('Awards');
}
