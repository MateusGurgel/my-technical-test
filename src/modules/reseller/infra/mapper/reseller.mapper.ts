import { CPF } from "../../domain/cpf.valueObject";
import { Reseller } from "../../domain/reseller.domain";
import { ResellerModel } from "../../domain/reseller.model";

export class ResellerMapper{
    public static toDomain(model: ResellerModel): Reseller {

        const cpf = CPF.create(model.cpf);

        return new Reseller(model.id, model.userId, model.walletId, cpf);
    }
}