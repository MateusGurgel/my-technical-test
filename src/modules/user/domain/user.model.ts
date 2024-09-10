import { InferSelectModel } from "drizzle-orm";
import { userTable } from "../../../infra/database/schema";

// Decidi usar o infer para evitar boilerplate
export type UserModel = InferSelectModel<typeof userTable>;