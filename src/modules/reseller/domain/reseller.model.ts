import { InferSelectModel } from "drizzle-orm";
import { resellerTable } from "../../../infra/database/schema";

export type ResellerModel = InferSelectModel<typeof resellerTable>;