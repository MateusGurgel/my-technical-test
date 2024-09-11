import { CreateShopkeeperAccountCommand } from "./createShopkeeperAccount.command";
import { createWalletCommand } from "@/modules/wallet/aplication/commands/createWallet";
import { createUserCommand } from "@/modules/user/aplication/commands/createUser";
import { createShopkeeperCommand } from "@/modules/shopkeeper/application/commands/createShopkeeper";

export const createShopkeeperAccountCommand = new CreateShopkeeperAccountCommand(createWalletCommand, createShopkeeperCommand, createUserCommand)