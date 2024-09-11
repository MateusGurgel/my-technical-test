import { CNPJ } from "@/modules/shopkeeper/domain/cnpj.valueObject";
import { Command } from "../../../../../lib/aplication/command";
import { CreateShopkeeperInput, CreateShopkeeperOutput } from "./createShopkeeper.dto";
import { ShopkeeperRepository } from "@/modules/shopkeeper/infra/database/shopkeeper.repo";

export class CreateShopkeeperCommand implements Command<CreateShopkeeperInput, CreateShopkeeperOutput> {
  constructor(private readonly shopkeeperRepository: ShopkeeperRepository) {}

  public async handler(input: CreateShopkeeperInput): Promise<CreateShopkeeperOutput> {
    
    const cnpj = CNPJ.create(input.cnpj);

    cnpj.validate();

    const shopkeeper = await this.shopkeeperRepository.createShopkeeper({cnpj: cnpj.values, userId: input.userId, walletId: input.walletId});

    return { shopkeeperId: shopkeeper.id };
  }
}
