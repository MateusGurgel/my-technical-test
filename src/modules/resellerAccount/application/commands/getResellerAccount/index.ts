import { getWalletCommand } from "@/modules/wallet/aplication/commands/getWallet";
import { GetResellerAccountCommand } from "./getResellerAccount.command";
import { getResellerCommand } from "@/modules/reseller/application/commands/getReseller";
import { getUserCommand } from "@/modules/user/aplication/commands/getUser";

export const getResellerAccountCommand = new GetResellerAccountCommand(getResellerCommand, getWalletCommand, getUserCommand)