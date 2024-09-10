import { Command } from "@/lib/aplication/command";
import { CreateResellerAccountInput } from "./createResellerAccount.dto";
import { CreateResellerCommand } from "@/modules/reseller/application/commands/createReseller/createReseller.command";
import { CreateUserCommand } from "@/modules/user/aplication/commands/createUser/createUser.command";
import { CreateWalletCommand } from "@/modules/wallet/aplication/commands/createWallet/createWallet.command";

export class CreateResellerAccountCommand
  implements Command<CreateResellerAccountInput, void>
{
  constructor(
    private readonly createWalletCommand: CreateWalletCommand,
    private readonly createResellerCommand: CreateResellerCommand,
    private readonly createUserCommand: CreateUserCommand
  ) {}

  public async handler(input: CreateResellerAccountInput){
    const user = await this.createUserCommand.handler({
      email: input.email,
      password: input.password,
      name: input.name,
    });

    const wallet = await this.createWalletCommand.handler();

    await this.createResellerCommand.handler({
      cpf: input.cpf,
      userId: user.userId,
      walletId: wallet.walletId,
    });


  }
}
