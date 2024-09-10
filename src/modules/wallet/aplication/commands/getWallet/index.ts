import { walletRepository } from "@/modules/wallet/infra/database";
import { GetWalletCommand } from "./getWallet.command";

export const getWalletCommand = new GetWalletCommand(walletRepository)