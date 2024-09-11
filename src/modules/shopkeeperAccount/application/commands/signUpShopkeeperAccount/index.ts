import { createShopkeeperAccountCommand } from "../createShopkeeperAccount";
import { SignUpShopkeeperAccountCommand } from "./signUpShopkeeperAccount.command";

export const signUpShopkeeperAccountCommand = new SignUpShopkeeperAccountCommand(createShopkeeperAccountCommand);