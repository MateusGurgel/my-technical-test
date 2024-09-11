import { createResellerAccountCommand } from "../createResellerAccount";
import { SignUpResellerAccountCommand } from "./signUpResellerAccount.command";

export const signUpResellerAccountCommand = new SignUpResellerAccountCommand(createResellerAccountCommand);