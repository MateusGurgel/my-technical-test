import { Command } from "@/lib/aplication/command";
import { SignUpInput } from "./signUp.dto";
import { CreateResellerAccountCommand } from "../createResellerAccount/createResellerAccount.command";

export class SignUpCommand
  implements Command<SignUpInput, void>
{
  constructor(
    private readonly createResellerAccountCommand: CreateResellerAccountCommand
  ) {}

  public async handler(input: SignUpInput) {

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
