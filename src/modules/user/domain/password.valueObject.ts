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

        if(this.values.length <= 8){
            throw new InvalidPasswordError()
        }

    }
}