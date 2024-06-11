import { uuid, text, boolean, pgTable, timestamp, numeric, jsonb } from "drizzle-orm/pg-core";
import type { Product } from '@/types'

export var product = pgTable("product", {
  id: uuid('id').primaryKey().defaultRandom().unique().notNull(),
  name: text("name").notNull(),
  description: text("description"), 
  price: numeric('price').notNull(),
  tags: jsonb('tags').$type<string[]>(), 
  image: text("image").notNull(), 
  currency: text("currency").notNull(), 
  created_at: timestamp('created_at', { mode: "string" }).defaultNow(),
});

export var user = pgTable("user", {
  id: uuid('id').primaryKey().defaultRandom().unique().notNull(),
  first_name: text('first_name').notNull(),
  name: text('name').notNull(),
  address: text('address').notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(), 
  role: text('role', { enum: ["user", "admin"]}), 
  cart: jsonb('cart').$type<Product[]>(), 
  created_at: timestamp('created_at', { mode: "string" }).defaultNow(),
});