
export async function up (knex) {
  await knex.schema.dropTableIfExists('Invitations');
  await knex.schema.createTable('Invitations', table => {
    table.uuid('id').primary().unique().notNull();
    table.uuid('groupId').references('Groups.id').notNull();
    table.uuid('inviter').references('Users.id').notNull();
    table.uuid('invitee').references('Users.id').notNull();
    table.string('message');
    table.boolean('status').defaultsTo('PENDING');
  });
};

export async function down (knex) {
  await knex.schema.dropTableIfExists('Invitations');
};
