import { Email } from "../../domain/email.valueObject";
import { Password } from "../../domain/password.valueObject";
import { User } from "../../domain/user.domain"
import { UserModel } from "../../domain/user.model";

export class UserMapper{
    public static toDomain(model: UserModel): User {

        const email = Email.create(model.email);
        const password = Password.create(model.password);

        return new User(model.id, model.name, email, password);
    }
}