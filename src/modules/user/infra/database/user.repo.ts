import { eq } from "drizzle-orm";

import { userTable } from "../../../../infra/database/schema";
import { UserMapper } from "../mapper/user.mapper";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";

export class UserRepository {
  constructor(private readonly db: PostgresJsDatabase<any>) {}

  async findUserByEmail(email: string) {
    const user = await this.db
      .select()
      .from(userTable)
      .where(eq(userTable.email, email));

    if (user.length <= 0) {
      return null;
    }

    const userDomain = UserMapper.toDomain(user[0]);

    return userDomain;
  }
}
