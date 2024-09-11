import { Command } from "../../../../../lib/aplication/command";
import { CreateTransactionCommand } from "../createTransaction/createTransaction.command";
import { CreateTransferInput, CreateTransferOutput } from "./createTransfer.dto"
import { GetShopkeeperAccountCommand } from "@/modules/shopkeeperAccount/application/commands/getShopkeeperAccount/getShopkeeperAccount.command";
import { GetResellerAccountCommand } from "@/modules/resellerAccount/application/commands/getResellerAccount/getResellerAccount.command";
import { InsufficientFundsError, InvalidTransactionAmountError } from "./createTransfer.errors"
import { UpdateWalletBalanceCommand } from "@/modules/wallet/aplication/commands/updateWalletBalance/updateWalletBalance.command";

export class CreateTransferCommand implements Command<CreateTransferInput, CreateTransferOutput> {
  constructor(
    private readonly createTransactionCommand: CreateTransactionCommand,
    private readonly getShopkeeperAccountCommand: GetShopkeeperAccountCommand,
    private readonly getResellerAccountCommand: GetResellerAccountCommand,
    private readonly updateWalletBalance: UpdateWalletBalanceCommand
  ) {}

  public async handler(input : CreateTransferInput): Promise<CreateTransferOutput> {
    
    const {shopkeeperAccount} = await this.getShopkeeperAccountCommand.handler({shopkeeperId: input.reciverId});
    const {resellerAccount} = await this.getResellerAccountCommand.handler({resellerId: input.senderId});

    if (resellerAccount.wallet.balance < input.value) {
      throw new InsufficientFundsError();
    }

    if (input.value <= 0) {
      throw new InvalidTransactionAmountError();
    }

    this.updateWalletBalance.handler({walletId: resellerAccount.wallet.id, ammount: resellerAccount.wallet.balance - input.value});
    this.updateWalletBalance.handler({walletId: shopkeeperAccount.wallet.id, ammount: shopkeeperAccount.wallet.balance + input.value});

    const transaciton = await this.createTransactionCommand.handler(input);

    return { transactionId: transaciton.transactionId };
  }
}
