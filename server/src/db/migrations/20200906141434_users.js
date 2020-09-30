export async function up (knex) {
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
    table.string('bio');
    table.string('avatar');
    table.string('wallet');
    table.dateTime('createdAt').notNull();
    table.dateTime('updatedAt').notNull();
  });
}

export async function down (knex) {
  await knex.schema.dropTableIfExists('Users');
}
