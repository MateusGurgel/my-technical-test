import { Command } from "../../../../../lib/aplication/command";
import { ResellerRepository } from "@/modules/reseller/infra/database/reseller.repo";
import { GetResellerInput, GetResellerOutput } from "./getReseller.dto";
import { InvalidResellerIdError } from "./getReseller.errors";

export class GetResellerCommand implements Command<GetResellerInput, GetResellerOutput> {
  constructor(private readonly resellerRepository: ResellerRepository) {}

  public async handler(input: GetResellerInput): Promise<GetResellerOutput> {
    
    const reseller = await this.resellerRepository.findResellerById(input.id);

    if (!reseller) {
        throw new InvalidResellerIdError(input.id)
    }

    return {reseller: reseller};
  }
}
