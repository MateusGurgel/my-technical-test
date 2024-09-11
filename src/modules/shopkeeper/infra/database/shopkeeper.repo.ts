import { eq, InferInsertModel } from "drizzle-orm";

import { ShopkeeperMapper } from "../mapper/shopkeeper.mapper";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { shopkeeperTable } from "@/infra/database/schema";

export class ShopkeeperRepository {
  constructor(private readonly db: PostgresJsDatabase<any>) {}

  async findShopkeeperByUserId(userId: number) {
    const shopkeeper = await this.db
      .select()
      .from(shopkeeperTable)
      .where(eq(shopkeeperTable.userId, userId));

    if (shopkeeper.length <= 0) {
      return null;
    }

    const shopKeeper = ShopkeeperMapper.toDomain(shopkeeper[0]);

    return shopKeeper;

  }

  async findShopkeeperById(shopkeeperId: number) {
    const shopkeeper = await this.db
      .select()
      .from(shopkeeperTable)
      .where(eq(shopkeeperTable.id, shopkeeperId));

    if (shopkeeper.length <= 0) {
      return null;
    }

    const shopkeeperDomain = ShopkeeperMapper.toDomain(shopkeeper[0]);

    return shopkeeperDomain;

  }


  async createShopkeeper(shopkeeper: InferInsertModel<typeof shopkeeperTable>) {
    const createdShopkeeper = await this.db.insert(shopkeeperTable).values(shopkeeper).returning();

    const shopkeeperDomain = ShopkeeperMapper.toDomain(createdShopkeeper[0]);

    return shopkeeperDomain;

  }
}
