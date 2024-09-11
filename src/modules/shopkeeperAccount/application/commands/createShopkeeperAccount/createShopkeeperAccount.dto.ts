import { CreateShopkeeperInput } from "@/modules/shopkeeper/application/commands/createShopkeeper/createShopkeeper.dto";
import { CreateUserInput } from "@/modules/user/aplication/commands/createUser/createUser.dto";
import { GetWalletInput } from "@/modules/wallet/aplication/commands/getWallet/getWallet.dto";

export interface CreateShopkeeperAccountInput extends CreateUserInput, CreateShopkeeperInput, GetWalletInput {
    userId: any,
    walletId: any,
}

