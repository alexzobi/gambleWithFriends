export async function up (knex) {
  await knex.schema.dropTableIfExists('Groups');
  await knex.schema.createTable('Groups', table => {
    table.uuid('id').primary().unique().notNull();
    table.string('name').notNull();
    table.integer('bankValue').notNull().defaultsTo(0);
    table.integer('initialMemberValue').notNull().defaultsTo(0);
    table.string('description');
    table.string('currencyName').notNull();
    table.string('administrator').references('Users.id').notNull();
    table.integer('voteRequirement').notNull().defaultsTo(2);
    table.boolean('allowNegativeBalance').defaultsTo(true);
    table.dateTime('createdAt').notNull();
    table.dateTime('updatedAt').notNull();
  });
}

export async function down (knex) {
  await knex.schema.dropTableIfExists('Groups');
}
