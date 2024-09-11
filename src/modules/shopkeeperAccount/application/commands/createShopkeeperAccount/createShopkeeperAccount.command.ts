import { Command } from "@/lib/aplication/command";
import { CreateShopkeeperAccountInput } from "./createShopkeeperAccount.dto";
import { CreateUserCommand } from "@/modules/user/aplication/commands/createUser/createUser.command";
import { CreateWalletCommand } from "@/modules/wallet/aplication/commands/createWallet/createWallet.command";
import { CreateShopkeeperCommand } from "@/modules/shopkeeper/application/commands/createShopkeeper/createShopkeeper.command";

export class CreateShopkeeperAccountCommand
  implements Command<CreateShopkeeperAccountInput, void>
{
  constructor(
    private readonly createWalletCommand: CreateWalletCommand,
    private readonly createShopkeeperCommand: CreateShopkeeperCommand,
    private readonly createUserCommand: CreateUserCommand
  ) {}

  public async handler(input: CreateShopkeeperAccountInput){
    const user = await this.createUserCommand.handler({
      email: input.email,
      password: input.password,
      name: input.name,
    });

    const wallet = await this.createWalletCommand.handler();

    await this.createShopkeeperCommand.handler({
      cnpj: input.cnpj,
      userId: user.userId,
      walletId: wallet.walletId,
    });


  }
}
