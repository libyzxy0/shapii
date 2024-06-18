import { uuid, text, boolean, pgTable, timestamp, numeric, jsonb, integer } from "drizzle-orm/pg-core";
import { relations } from 'drizzle-orm'
import type { Product } from '@/types'

export const products = pgTable("product", {
  id: uuid('id').primaryKey().defaultRandom().unique().notNull(),
  name: text("name").notNull(),
  description: text("description"), 
  price: numeric('price').notNull(),
  tags: jsonb('tags').$type<string[]>(), 
  image: text("image").notNull(), 
  currency: text("currency").notNull(), 
  created_at: timestamp('created_at', { mode: "string" }).defaultNow(),
  user_id: uuid('user_id').references(() => users.id), 
  stocks: integer('stocks').notNull().default(0),
  featured: boolean('featured').notNull().default(false)
});

export const users = pgTable("user", {
  id: uuid('id').primaryKey().defaultRandom().unique().notNull(),
  first_name: text('first_name').notNull(),
  name: text('name').notNull(),
  address: text('address').notNull(),
  email: text('email').notNull().unique(),
  phone: text('phone').notNull(), 
  password: text('password').notNull(), 
  role: text('role', { enum: ["user", "admin"]}), 
  created_at: timestamp('created_at', { mode: "string" }).defaultNow(),
});

export const carts = pgTable("cart", {
  id: uuid('id').primaryKey().defaultRandom().unique().notNull(),
  name: text('name').notNull(),
  currency: text("currency").notNull(), 
  image: text("image").notNull(), 
  quantity: integer("quantity").notNull(), 
  price: numeric('price').notNull(),
  user_id: uuid('user_id').references(() => users.id),
  product_id: uuid('product_id').references(() => products.id),
  created_at: timestamp('created_at', { mode: "string" }).defaultNow(),
});

export const usersRelations = relations(users, ({ many }) => ({
  carts: many(carts),
  products: many(products)
}));

export const productsRelations = relations(products, ({ one }) => ({
  user_id: one(users, {
    fields: [products.user_id],
    references: [users.id],
  }),
}));

export const cartsRelations = relations(carts, ({ one }) => ({
  user_id: one(users, {
    fields: [carts.user_id],
    references: [users.id],
  }),
}));