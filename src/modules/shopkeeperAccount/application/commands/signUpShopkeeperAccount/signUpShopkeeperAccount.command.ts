import { Command } from "@/lib/aplication/command";
import { SignUpShopkeeperAccountInput } from "./signUpShopkeeperAccount.dto";
import { CreateShopkeeperAccountCommand } from "../createShopkeeperAccount/createShopkeeperAccount.command";

export class SignUpShopkeeperAccountCommand
  implements Command<SignUpShopkeeperAccountInput, void>
{
  constructor(
    private readonly createShopkeeperAccountCommand: CreateShopkeeperAccountCommand
  ) {}

  public async handler(input: SignUpShopkeeperAccountInput) {

    await this.createShopkeeperAccountCommand.handler({
      cnpj: input.cnpj,
      email: input.email,
      name: input.name,
      password: input.password,
      userId: null,
      walletId: null,
    });

  }
}
