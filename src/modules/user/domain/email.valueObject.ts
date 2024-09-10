import { ValueObject } from "../../../lib/domain/valueObject";
import { InvalidEmailError } from "./user.errors";

export class Email extends ValueObject<string> {
    private constructor(email: string) {
        super(email);
    }

    public static create(email: string): Email {
        return new Email(email);
    }

    public validate() {
        const emailValidation = /\S+@\S+\.\S+/;

        if (!emailValidation.test(this.values)){
            throw new InvalidEmailError();
        }

    }
}