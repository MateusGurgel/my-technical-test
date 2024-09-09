import { ValueObject } from "../../../lib/domain/valueObject";

export class Password extends ValueObject<string> {
    private constructor(password: string) {
        super(password);
    }

    public static create(password: string): Password {
        return new Password(password);
    }

    public static validate(password: string): boolean {
        // Minimum eight characters, at least one uppercase letter, one lowercase letter and one number
        const passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return passwordValidation.test(password);
    }
}