import { CreateResellerInput } from "@/modules/reseller/application/commands/createReseller/createReseller.dto";
import { CreateUserInput } from "@/modules/user/aplication/commands/createUser/createUser.dto";
import { CreateWalletInput } from "@/modules/wallet/aplication/commands/findWallet/findWallet.dto";

export interface CreateResellerAccountInput extends CreateUserInput, CreateResellerInput, CreateWalletInput {
}

