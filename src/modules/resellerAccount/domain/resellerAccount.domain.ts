import { Reseller } from "@/modules/reseller/domain/reseller.domain";
import { User } from "@/modules/user/domain/user.domain";
import { Wallet } from "@/modules/wallet/domain/wallet.domain";

export class ResellerAccount {
  constructor(
    private user: User,
    private reseller: Reseller,
    private wallet: Wallet
  ) {}
  
}
