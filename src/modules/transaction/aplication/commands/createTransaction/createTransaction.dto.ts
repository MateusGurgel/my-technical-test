export interface CreateTransactionInput {
    reciverId: number;
    senderId: number;
    value: number;
}

export interface CreateTransactionOutput {
    transactionId: number;
}