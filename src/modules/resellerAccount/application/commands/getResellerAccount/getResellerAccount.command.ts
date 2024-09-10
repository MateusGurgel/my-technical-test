import { Command } from "@/lib/aplication/command";
import { GetResellerAccountInput, GetResellerAccountOutput } from "./getResellerAccount.dto";
import { ResellerAccount } from "@/modules/resellerAccount/domain/resellerAccount.domain";
import { GetResellerCommand } from "@/modules/reseller/application/commands/getReseller/getReseller.command";
import { GetWalletCommand } from "@/modules/wallet/aplication/commands/getWallet/getWallet.command";
import { GetUserCommand } from "@/modules/user/aplication/commands/getUser/getUser.command";

export class GetResellerAccountCommand
  implements Command<GetResellerAccountInput, GetResellerAccountOutput>
{
  constructor(
    private readonly getResellerCommand: GetResellerCommand,
    private readonly getWalletCommand: GetWalletCommand,
    private readonly getUserCommand: GetUserCommand
  ) {}

  public async handler(input: GetResellerAccountInput): Promise<GetResellerAccountOutput> {

    const reseller = await this.getResellerCommand.handler({id: input.resellerId});
    const wallet = await this.getWalletCommand.handler({walletId: reseller.reseller.walletId});
    const user = await this.getUserCommand.handler({id: reseller.reseller.userId});

    const resellerAccount = new ResellerAccount(user.user, reseller.reseller, wallet.wallet);

    return {resellerAccount};
  }
}
