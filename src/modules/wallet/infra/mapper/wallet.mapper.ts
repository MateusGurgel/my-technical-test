import { Wallet } from "../../domain/wallet.domain";
import { WalletModel } from "../../domain/wallet.model";

export class WalletMapper{
    public static toDomain(model: WalletModel): Wallet {
        return new Wallet(model.id, model.balance);
    }
}