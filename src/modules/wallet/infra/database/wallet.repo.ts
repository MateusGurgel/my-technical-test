import { eq } from "drizzle-orm";

import { walletTable } from "../../../../infra/database/schema";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { WalletMapper } from "../mapper/wallet.mapper";

export class WalletRepository {
  constructor(private readonly db: PostgresJsDatabase<any>) {}

  async createWallet() {

    const wallet = await this.db.insert(walletTable).values({ balance: 0 }).returning();

    const walletDomin = WalletMapper.toDomain(wallet[0]);

    return walletDomin;
  }

  async findWalletById(walletId: number) {
    const wallet = await this.db
      .select()
      .from(walletTable)
      .where(eq(walletTable.id, walletId));

    if (wallet.length <= 0) {
      return null;
    }

    const walletDomin = WalletMapper.toDomain(wallet[0]);

    return walletDomin;
  }
}
