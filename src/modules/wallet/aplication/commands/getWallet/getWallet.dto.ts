import { Wallet } from "@/modules/wallet/domain/wallet.domain";

export interface GetWalletInput {
    walletId: number;
}

export interface GetWalletOutput {
    wallet: Wallet
}