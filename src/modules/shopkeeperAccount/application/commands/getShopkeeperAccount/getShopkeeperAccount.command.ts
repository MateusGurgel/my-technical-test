import { Command } from "@/lib/aplication/command";
import { GetShopkeeperAccountInput, GetShopkeeperAccountOutput } from "./getShopkeeperAccount.dto";
import { GetWalletCommand } from "@/modules/wallet/aplication/commands/getWallet/getWallet.command";
import { GetUserCommand } from "@/modules/user/aplication/commands/getUser/getUser.command";
import { GetShopkeeperCommand } from "@/modules/shopkeeper/application/commands/getShopkeeper/getShopkeeper.command";
import { ShopkeeperAccount } from "@/modules/shopkeeperAccount/domain/shopkeeperAccount.domain";

export class GetShopkeeperAccountCommand
  implements Command<GetShopkeeperAccountInput, GetShopkeeperAccountOutput>
{
  constructor(
    private readonly getShopkeeperCommand: GetShopkeeperCommand,
    private readonly getWalletCommand: GetWalletCommand,
    private readonly getUserCommand: GetUserCommand
  ) {}

  public async handler(input: GetShopkeeperAccountInput): Promise<GetShopkeeperAccountOutput> {

    const shopkeeper = await this.getShopkeeperCommand.handler({id: input.shopkeeperId});
    const wallet = await this.getWalletCommand.handler({walletId: shopkeeper.shopkeeper.walletId});
    const user = await this.getUserCommand.handler({id: shopkeeper.shopkeeper.userId});

    const shopkeeperAccount = new ShopkeeperAccount(user.user, shopkeeper.shopkeeper, wallet.wallet);

    return {shopkeeperAccount};
  }
}
