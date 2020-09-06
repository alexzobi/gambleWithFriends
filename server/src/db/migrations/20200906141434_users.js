export async function up(knex: Knex$Knex<*>) {
  await knex.schema.dropTableIfExists('Users');
  await knex.schema.createTable('Users', table => {
    table
      .uuid('id')
      .primary()
      .notNull();
    table
      .string('userName')
      .notNull()
      .unique();
    table
      .string('email')
      .notNull()
      .unique();
    table.string('password').notNull();
    table.dateTime('createdAt').notNull();
    table.dateTime('updatedAt').notNull();
  });
}

export async function down(knex: Knex$Knex<*>) {
  await knex.schema.dropTableIfExists('Users');
}
