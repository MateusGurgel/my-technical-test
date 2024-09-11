import { ValueObject } from "../../../lib/domain/valueObject";
import {InvalidCNPJError} from "./shopkeeper.errors"

export class CNPJ extends ValueObject<string> {
    private constructor(cnpj: string) {
        super(cnpj);
    }

    public static create(cnpj: string): CNPJ {
        return new CNPJ(cnpj);
    }

    public validate() {
        const cnpjValidation = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/

        if (!cnpjValidation.test(this.values)) {
            throw new InvalidCNPJError();
        }


    }
}