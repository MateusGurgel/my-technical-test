import { signUpShopkeeperAccountCommand } from "@/modules/shopkeeperAccount/application/commands/signUpShopkeeperAccount";
import { SignUpShopkeeperAccountController } from "./signUp.controller";

export const signUpShopkeeperAccountController = new SignUpShopkeeperAccountController(signUpShopkeeperAccountCommand)