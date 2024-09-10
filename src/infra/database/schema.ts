import { integer } from "drizzle-orm/pg-core"
import { pgTable, timestamp, varchar } from "drizzle-orm/pg-core"
import { serial } from "drizzle-orm/pg-core"

export const baseColumns = {
    id: serial("id").primaryKey(),

    createdAt: timestamp("created_at", {mode:"date"}).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", {mode:"date"}).notNull().defaultNow(),
}

export const userTable = pgTable("users", {
    ...baseColumns,
    name: varchar("name", {length: 255}).notNull(),
    email: varchar("email", {length: 255}).notNull().unique(),
    password: varchar("password", {length: 255}).notNull(),
})

export const walletTable = pgTable("wallets", {
    ...baseColumns,
    balance: integer("balance").notNull().default(0),
})

export const shopkeeperTable = pgTable("shopkeepers", {
    ...baseColumns,
    walletId: serial("wallet_id").notNull().references(() => walletTable.id),
    userId: serial("user_id").notNull().references(() => userTable.id),
    cnpj: varchar("cnpj", {length: 255}).notNull().unique(),
})

export const resellerTable = pgTable("resellers", {
    ...baseColumns,
    walletId: serial("wallet_id").notNull().references(() => walletTable.id),
    userId: serial("user_id").notNull().references(() => userTable.id),
    cpf: varchar("cpf", {length: 255}).notNull().unique(),
})

export const transaction = pgTable("transactions", {
    ...baseColumns,
    reciverId: serial("reciver_id").notNull().references(() => shopkeeperTable.id),
    senderId: serial("sender_id").notNull().references(() => resellerTable.id),
    value: varchar("value", {length: 255}).notNull(),
    type: varchar("type", {length: 255}).notNull(),
})
