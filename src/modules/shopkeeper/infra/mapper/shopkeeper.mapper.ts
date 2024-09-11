import { CNPJ } from "../../domain/cnpj.valueObject";
import { Shopkeeper } from "../../domain/shopkeeper.domain";
import { ShopkeeperModel } from "../../domain/shopkeeper.model";

export class ShopkeeperMapper{
    public static toDomain(model: ShopkeeperModel): Shopkeeper {

        const cnpj = CNPJ.create(model.cnpj);

        return new Shopkeeper(model.id, model.userId, model.walletId, cnpj);
    }
}