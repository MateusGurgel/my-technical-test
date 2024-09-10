import { InferSelectModel } from "drizzle-orm";
import { walletTable } from "../../../infra/database/schema"

export type WalletModel = InferSelectModel<typeof walletTable>;