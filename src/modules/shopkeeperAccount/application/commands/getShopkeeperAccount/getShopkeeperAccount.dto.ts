import { ShopkeeperAccount } from "@/modules/shopkeeperAccount/domain/shopkeeperAccount.domain";

export interface GetShopkeeperAccountInput {
    shopkeeperId: number;
}

export interface GetShopkeeperAccountOutput {
    shopkeeperAccount: ShopkeeperAccount
}