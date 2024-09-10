import { eq, InferInsertModel } from "drizzle-orm";

import { resellerTable } from "../../../../infra/database/schema";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { ResellerMapper } from "../mapper/reseller.mapper";

export class ResellerRepository {
  constructor(private readonly db: PostgresJsDatabase<any>) {}

  async findResellerByUserId(userId: number) {
    const reseller = await this.db
      .select()
      .from(resellerTable)
      .where(eq(resellerTable.userId, userId));

    if (reseller.length <= 0) {
      return null;
    }

    const resellerDomain = ResellerMapper.toDomain(reseller[0]);

    return resellerDomain;

  }

  async createReseller(reseller: InferInsertModel<typeof resellerTable>) {
    const resellerCreated = await this.db.insert(resellerTable).values(reseller).returning();

    const resellerDomain = ResellerMapper.toDomain(resellerCreated[0]);

    return resellerDomain;

  }
}
