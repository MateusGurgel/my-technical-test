import { SignUpResellerAccountController } from "./signUpResellerAccount.controller";
import { signUpResellerAccountCommand } from "@/modules/resellerAccount/application/commands/signUpResellerAccount";

export const signUpResellerAccountController = new SignUpResellerAccountController(signUpResellerAccountCommand)