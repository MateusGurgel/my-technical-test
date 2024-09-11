import { InferSelectModel } from "drizzle-orm";
import { shopkeeperTable } from "../../../infra/database/schema";

export type ShopkeeperModel = InferSelectModel<typeof shopkeeperTable>;