import { userRepository } from "@/modules/user/infra/database";
import { CreateUserCommand } from "./createUser.command";

export const createUserCommand = new CreateUserCommand(userRepository)