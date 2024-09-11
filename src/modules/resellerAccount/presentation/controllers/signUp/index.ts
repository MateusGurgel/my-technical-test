import { SignUpController } from "./signUp.controller";
import { signUpCommand } from "@/modules/resellerAccount/application/commands/signUp";

export const signUpController = new SignUpController(signUpCommand)