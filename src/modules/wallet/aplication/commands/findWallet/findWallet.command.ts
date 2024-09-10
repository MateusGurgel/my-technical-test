import { Command } from "../../../../../lib/aplication/command";
import { WalletRepository } from "@/modules/wallet/infra/database/wallet.repo";
import { CreateWalletInput, CreateWalletOutput } from "./findWallet.dto";
import { WalletNotFound } from "./findWallet.errors";

export class FindWalletCommand implements Command<CreateWalletInput, CreateWalletOutput> {
  constructor(private readonly walletRepository: WalletRepository) {}

  public async handler(input: CreateWalletInput): Promise<CreateWalletOutput> {
    const wallet = await this.walletRepository.findWalletById(input.walletId);

    if (wallet === null) {
      throw new WalletNotFound(input.walletId);
    }

    return {wallet: wallet};
  }
}
