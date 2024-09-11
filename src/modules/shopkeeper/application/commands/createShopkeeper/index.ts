import { shopkeeperRepository } from "@/modules/shopkeeper/infra/database";
import { CreateShopkeeperCommand } from "./createShopkeeper.command";

export const createShopkeeperCommand = new CreateShopkeeperCommand(shopkeeperRepository)