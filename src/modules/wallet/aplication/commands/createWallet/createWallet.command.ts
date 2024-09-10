import { Command } from "../../../../../lib/aplication/command";
import { CreateWalletOutput } from "./createWallet.dto";
import { WalletRepository } from "@/modules/wallet/infra/database/wallet.repo";

export class CreateWalletCommand implements Command<null, CreateWalletOutput> {
  constructor(private readonly walletRepository: WalletRepository) {}

  public async handler(): Promise<CreateWalletOutput> {
    const wallet = await this.walletRepository.createWallet();

    return { walletId: wallet.id };
  }
}
