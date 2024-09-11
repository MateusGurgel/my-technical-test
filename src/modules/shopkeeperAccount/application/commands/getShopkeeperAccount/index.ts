import { getWalletCommand } from "@/modules/wallet/aplication/commands/getWallet";
import { GetShopkeeperAccountCommand } from "./getShopkeeperAccount.command";
import { getUserCommand } from "@/modules/user/aplication/commands/getUser";
import { getShopkeeperCommand } from "@/modules/shopkeeper/application/commands/getShopkeeper";

export const getShopkeeperAccountCommand = new GetShopkeeperAccountCommand(getShopkeeperCommand, getWalletCommand, getUserCommand)