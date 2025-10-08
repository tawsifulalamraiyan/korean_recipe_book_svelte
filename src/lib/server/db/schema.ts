import { pgTable, serial, integer, text, date } from 'drizzle-orm/pg-core';

export const racipebook = pgTable('racipe', {
	id: serial('id').primaryKey(),
	name: text('name'),
	email: text('email'),
	phonenumber: integer('phone'),
	review: text('review'),
	createdAt: date('date').defaultNow()
});
