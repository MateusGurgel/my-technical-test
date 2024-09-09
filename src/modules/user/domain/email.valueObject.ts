import { ValueObject } from "../../../lib/domain/valueObject";

export class Email extends ValueObject<string> {
    private constructor(email: string) {
        super(email);
    }

    public static create(email: string): Email {
        return new Email(email);
    }

    public static validate(email: string): boolean {
        const emailValidation = /\S+@\S+\.\S+/;
        return emailValidation.test(email);
    }
}