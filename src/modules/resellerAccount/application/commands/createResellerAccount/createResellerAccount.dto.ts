import { CreateResellerInput } from "@/modules/reseller/application/commands/createReseller/createReseller.dto";
import { CreateUserInput } from "@/modules/user/aplication/commands/createUser/createUser.dto";
import { GetWalletInput } from "@/modules/wallet/aplication/commands/getWallet/getWallet.dto";

export interface CreateResellerAccountInput extends CreateUserInput, CreateResellerInput, GetWalletInput {
    userId: any,
    walletId: any,
}

