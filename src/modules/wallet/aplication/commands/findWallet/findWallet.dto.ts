import { Wallet } from "@/modules/wallet/domain/wallet.domain";

export interface CreateWalletInput {
    walletId: number;
}

export interface CreateWalletOutput {
    wallet: Wallet
}