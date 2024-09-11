import { Command } from "../../../../../lib/aplication/command";
import { WalletRepository } from "@/modules/wallet/infra/database/wallet.repo";
import { UpdateWalletBalanceInput } from "./updateWalletBalance.dto";
import { WalletNotFound } from "./updateWalletBalance.errors";

export class UpdateWalletBalanceCommand implements Command<UpdateWalletBalanceInput, void> {
  constructor(private readonly walletRepository: WalletRepository) {}

  public async handler(input: UpdateWalletBalanceInput) {
    const wallet = await this.walletRepository.findWalletById(input.walletId);

    if (wallet === null) {
      throw new WalletNotFound(input.walletId);
    }

    await this.walletRepository.updateBalance(input.walletId, input.ammount);
  }
}
