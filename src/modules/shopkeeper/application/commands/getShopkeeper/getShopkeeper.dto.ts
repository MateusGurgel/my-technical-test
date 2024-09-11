import { Shopkeeper } from "@/modules/shopkeeper/domain/shopkeeper.domain";

export interface GetShopkeeperInput {
    id: number;
}

export interface GetShopkeeperOutput {
    shopkeeper: Shopkeeper
}