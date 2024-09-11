import { db } from "@/infra/database/connection";
import { ShopkeeperRepository } from "./shopkeeper.repo";

export const shopkeeperRepository = new ShopkeeperRepository(db)