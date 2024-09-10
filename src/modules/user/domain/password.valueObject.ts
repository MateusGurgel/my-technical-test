import { ValueObject } from "../../../lib/domain/valueObject";
import { InvalidPasswordError } from "./user.errors";

export class Password extends ValueObject<string> {
    private constructor(password: string) {
        super(password);
    }

    public static create(password: string): Password {
        return new Password(password);
    }

    public validate() {
        // Minimum eight characters, at least one uppercase letter, one lowercase letter and one number
        const passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

        if(!passwordValidation.test(this.values)){
            throw new InvalidPasswordError()
        }

    }
}