import { InferSelectModel } from "drizzle-orm";
import { transactionTable } from "../../../infra/database/schema"

export type TransactionModel = InferSelectModel<typeof transactionTable>;