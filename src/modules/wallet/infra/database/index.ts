import { db } from "@/infra/database/connection";
import { WalletRepository } from "./wallet.repo";

export const walletRepository = new WalletRepository(db);