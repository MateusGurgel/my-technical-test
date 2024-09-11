export class InsufficientFundsError extends Error {
    constructor() {
        super("Insufficient funds");
    }
}

export class InvalidTransactionAmountError extends Error {
    constructor() {
        super("Invalid tansaction amount");
    }
}