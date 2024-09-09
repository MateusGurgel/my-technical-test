import { InferSelectModel } from "drizzle-orm";
import { userTable } from "../../../infra/database/schema";

export type UserModel = InferSelectModel<typeof userTable>;