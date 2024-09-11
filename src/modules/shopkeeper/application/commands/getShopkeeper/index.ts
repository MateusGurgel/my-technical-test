import { GetShopkeeperCommand } from "./getShopkeeper.command";
import { shopkeeperRepository } from "@/modules/shopkeeper/infra/database";

export const getShopkeeperCommand =  new GetShopkeeperCommand(shopkeeperRepository)