import { CreateResellerAccountCommand } from "./createResellerAccount.command";
import { createWalletCommand } from "@/modules/wallet/aplication/commands/createWallet";
import { createResellerCommand } from "@/modules/reseller/application/commands/createReseller";
import { createUserCommand } from "@/modules/user/aplication/commands/createUser";

export const createResellerAccountCommand = new CreateResellerAccountCommand(createWalletCommand, createResellerCommand, createUserCommand)