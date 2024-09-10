import { userRepository } from "@/modules/user/infra/database";
import { GetUserCommand } from "./getUser.command";

export const getUserCommand = new GetUserCommand(userRepository)