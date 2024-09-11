import { CreateTransactionCommand } from "./createTransaction.command";
import { transactionRepository } from "./../../../infra/database"

export const createTransactionCommand = new CreateTransactionCommand(transactionRepository);