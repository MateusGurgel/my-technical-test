import { UserRepository } from "@/modules/user/infra/database/user.repo";
import { Command } from "../../../../../lib/aplication/command";
import { GetUserInput, GetUserOutput } from "./getUser.dto";
import { InvalidUserIdError } from "./getUser.errors";

export class GetUserCommand implements Command<GetUserInput, GetUserOutput> {
  constructor(private readonly userRepository: UserRepository) {}

  public async handler(input: GetUserInput): Promise<GetUserOutput> {

    const user = await this.userRepository.findUserById(input.id);
    
    if (!user) {
        throw new InvalidUserIdError(input.id)
    }

    return {user: user};
  }
}
