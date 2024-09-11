export interface CreateTransferInput {
    reciverId: number;
    senderId: number;
    value: number;
}

export interface CreateTransferOutput {
    transactionId: number;
}