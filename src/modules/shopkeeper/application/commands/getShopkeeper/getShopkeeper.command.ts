import { ShopkeeperRepository } from "@/modules/shopkeeper/infra/database/shopkeeper.repo";
import { Command } from "../../../../../lib/aplication/command";
import { GetShopkeeperInput, GetShopkeeperOutput } from "./getShopkeeper.dto";
import { InvalidShopkeeperIdError } from "./getShopkeeper.errors";

export class GetShopkeeperCommand implements Command<GetShopkeeperInput, GetShopkeeperOutput> {
  constructor(private readonly shopkeeperRepository: ShopkeeperRepository) {}

  public async handler(input: GetShopkeeperInput): Promise<GetShopkeeperOutput> {
    
    const shopkeeper = await this.shopkeeperRepository.findShopkeeperById(input.id);

    if (!shopkeeper) {
        throw new InvalidShopkeeperIdError(input.id)
    }

    return {shopkeeper: shopkeeper};
  }
}
