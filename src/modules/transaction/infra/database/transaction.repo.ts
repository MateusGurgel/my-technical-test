import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { TransactionMapper } from "../mapper/transaction.mapper";
import { transactionTable } from "@/infra/database/schema";
import { Transaction } from "../../domain/transaction.domain";
import { InferInsertModel } from "drizzle-orm";

export class TransactionRepository {
  constructor(private readonly db: PostgresJsDatabase<any>) {}

  async createTransaction(input: InferInsertModel<typeof transactionTable>): Promise<Transaction> {

    const transaction = await this.db.insert(transactionTable).values(input).returning();

    const transactionDomain = TransactionMapper.toDomain(transaction[0]);

    return transactionDomain;
  }
}
