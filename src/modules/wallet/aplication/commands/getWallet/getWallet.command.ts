import { Command } from "../../../../../lib/aplication/command";
import { WalletRepository } from "@/modules/wallet/infra/database/wallet.repo";
import { GetWalletInput, GetWalletOutput } from "./getWallet.dto";
import { WalletNotFound } from "./getWallet.errors";

export class GetWalletCommand implements Command<GetWalletInput, GetWalletOutput> {
  constructor(private readonly walletRepository: WalletRepository) {}

  public async handler(input: GetWalletInput): Promise<GetWalletOutput> {
    const wallet = await this.walletRepository.findWalletById(input.walletId);

    if (wallet === null) {
      throw new WalletNotFound(input.walletId);
    }

    return {wallet: wallet};
  }
}
