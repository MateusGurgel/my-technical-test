import { db } from "@/infra/database/connection";
import { TransactionRepository } from "./transaction.repo";

export const transactionRepository = new TransactionRepository(db);