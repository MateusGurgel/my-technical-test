import { Command } from "../../../../../lib/aplication/command";
import { CreateResellerInput, CreateResellerOutput } from "./createReseller.dto";
import { ResellerRepository } from "@/modules/reseller/infra/database/reseller.repo";
import { CPF } from "@/modules/reseller/domain/cpf.valueObject";

export class CreateResellerCommand implements Command<CreateResellerInput, CreateResellerOutput> {
  constructor(private readonly resellerRepository: ResellerRepository) {}

  public async handler(input: CreateResellerInput): Promise<CreateResellerOutput> {
    
    const cpf = CPF.create(input.cpf);

    cpf.validate();

    const reseller = await this.resellerRepository.createReseller({cpf: cpf.values, userId: input.userId, walletId: input.walletId});

    return { resellerId: reseller.id };
  }
}
