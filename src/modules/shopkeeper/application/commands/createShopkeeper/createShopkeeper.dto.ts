export interface CreateShopkeeperInput {
    userId: number;
    walletId: number;
    cnpj: string;
}

export interface CreateShopkeeperOutput {
    shopkeeperId: number;
}