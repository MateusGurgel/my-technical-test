export interface CreateResellerInput {
    userId: number;
    walletId: number;
    cpf: string;
}

export interface CreateResellerOutput {
    resellerId: number;
}