import { Transaction } from "../../domain/transaction.domain";
import { TransactionModel } from "../../domain/transaction.model";

export class TransactionMapper{
    public static toDomain(model: TransactionModel): Transaction {
        return new Transaction(model.id, model.reciverId, model.senderId, model.value, model.type);
    }
}