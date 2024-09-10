import { Email } from "@/modules/user/domain/email.valueObject";
import { Command } from "../../../../../lib/aplication/command";
import { CreateUserInput, CreateUserOutput } from "./createUser.dto";
import { UserRepository } from "@/modules/user/infra/database/user.repo";
import { Password } from "@/modules/user/domain/password.valueObject";
import { Cryptography } from "@/infra/crypto/crypto";

const PEPER = process.env.PEPER!;

export class CreateUserCommand implements Command<CreateUserInput, CreateUserOutput> {
  constructor(private readonly userRepository: UserRepository) {}

  public async handler(input: CreateUserInput): Promise<CreateUserOutput> {
    
    const password = Password.create(input.password);
    const email = Email.create(input.email);

    email.validate();
    password.validate();

    const hashedPassword = Cryptography.encrypt(password.values, PEPER);

    const user = await this.userRepository.createUser({ email: email.values, name: input.name, password: hashedPassword });

    return { userId: user.id };
  }
}
