import { createResellerAccountCommand } from "../createResellerAccount";
import { SignUpCommand } from "./signUp.command";

export const signUpCommand = new SignUpCommand(createResellerAccountCommand);