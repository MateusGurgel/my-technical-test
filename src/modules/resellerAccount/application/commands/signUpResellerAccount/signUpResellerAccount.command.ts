import { Command } from "@/lib/aplication/command";
import { SignUpResellerAccountInput } from "./signUpResellerAccount.dto";
import { CreateResellerAccountCommand } from "../createResellerAccount/createResellerAccount.command";

export class SignUpResellerAccountCommand
  implements Command<SignUpResellerAccountInput, void>
{
  constructor(
    private readonly createResellerAccountCommand: CreateResellerAccountCommand
  ) {}

  public async handler(input: SignUpResellerAccountInput) {

    await this.createResellerAccountCommand.handler({
      cpf: input.cpf,
      email: input.email,
      name: input.name,
      password: input.password,
      userId: null,
      walletId: null,
    });

  }
}
