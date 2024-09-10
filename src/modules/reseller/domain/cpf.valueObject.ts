import { ValueObject } from "../../../lib/domain/valueObject";
import {InvalidCPFError} from "./reseller.errors"

export class CPF extends ValueObject<string> {
    private constructor(cpf: string) {
        super(cpf);
    }

    public static create(cpf: string): CPF {
        return new CPF(cpf);
    }

    public validate() {
        const cpfValidation = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/

        if (!cpfValidation.test(this.values)) {
            throw new InvalidCPFError();
        }


    }
}