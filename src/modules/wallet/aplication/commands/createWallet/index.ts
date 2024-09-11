import { walletRepository } from "@/modules/wallet/infra/database";
import { CreateWalletCommand } from "./createWallet.command";

export const createWalletCommand = new CreateWalletCommand(walletRepository);