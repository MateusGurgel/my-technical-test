import { Command } from "../../../../../lib/aplication/command";
import { UserRepository } from "../../../infra/database/user.repo";
import { LoginInput, LoginOutput } from "./login.dto";
import { Cryptography } from "@/infra/crypto/crypto";
import { JWT } from "@/infra/crypto/jwt";
import { InvalidCredentials } from "./login.errors";

const SECRET = process.env.JWT_SECRET!;
const PEPER = process.env.PEPER!;

export class LoginCommand implements Command<LoginInput, LoginOutput> {
  constructor(private readonly userRepository: UserRepository) {}

  public async handler(input: LoginInput): Promise<LoginOutput> {
    const user = await this.userRepository.findUserByEmail(input.email);

    if (user === null) {
      throw new InvalidCredentials();
    }

    const parsedPassword = Cryptography.parseEncryptedData(
      user.password.values
    );

    const encryptedPassword = Cryptography.encrypt(
      input.password,
      PEPER,
      parsedPassword.iterations,
      parsedPassword.salt
    );
    
    if (!Cryptography.compareString(encryptedPassword, user.password.values)) {
      throw new InvalidCredentials();
    }

    const token = JWT.sign({ id: user.id, email: user.email.values }, SECRET);

    return { token };
  }
}
