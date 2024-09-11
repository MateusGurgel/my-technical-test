import { CreateTransferCommand } from "./createTransaction.command";
import { getShopkeeperAccountCommand } from "@/modules/shopkeeperAccount/application/commands/getShopkeeperAccount";
import { getResellerAccountCommand } from "@/modules/resellerAccount/application/commands/getResellerAccount";
import { createTransactionCommand } from "../createTransaction";
import { updateWalletBalanceCommand } from "@/modules/wallet/aplication/commands/updateWalletBalance";

export const createTransferCommand = new CreateTransferCommand(
  createTransactionCommand,
  getShopkeeperAccountCommand,
  getResellerAccountCommand,
  updateWalletBalanceCommand
);
