import { Shopkeeper } from "@/modules/shopkeeper/domain/shopkeeper.domain";
import { User } from "@/modules/user/domain/user.domain";
import { Wallet } from "@/modules/wallet/domain/wallet.domain";

export class ShopkeeperAccount {
  constructor(
    private _user: User,
    private _shopkeeper: Shopkeeper,
    private _wallet: Wallet
  ) {}

  get wallet(){
    return this._wallet;
  } 
}
