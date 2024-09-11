import { Command } from "../../../../../lib/aplication/command";
import { CreateTransactionInput, CreateTransactionOutput } from "./createTransaction.dto"
import {TransactionRepository} from "../../../infra/database/transaction.repo"

export class CreateTransactionCommand implements Command<CreateTransactionInput, CreateTransactionOutput> {
  constructor(private readonly transactionRepository: TransactionRepository) {}

  public async handler(input : CreateTransactionInput): Promise<CreateTransactionOutput> {
    const transaction = await this.transactionRepository.createTransaction({...input, type: "TRANSFER"});

    return { transactionId: transaction.id };
  }
}
