import { walletRepository } from "@/modules/wallet/infra/database";
import { UpdateWalletBalanceCommand } from "./updateWalletBalance.command";

export const updateWalletBalanceCommand = new UpdateWalletBalanceCommand(walletRepository)