import { Reseller } from "@/modules/reseller/domain/reseller.domain";
import { User } from "@/modules/user/domain/user.domain";
import { Wallet } from "@/modules/wallet/domain/wallet.domain";

export class ResellerAccount {
  constructor(
    private _user: User,
    private _reseller: Reseller,
    private _wallet: Wallet
  ) {}  

  get reseller(): Reseller {
    return this._reseller;
  }

  get wallet(): Wallet {
    return this._wallet;
  }

  get user(): User {
    return this._user;
  }
}
