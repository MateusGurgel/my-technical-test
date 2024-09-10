import { Email } from "./email.valueObject";
import { Password } from "./password.valueObject";


export class User{
    constructor(
        private _id: number,
        private _name: string,
        private _email: Email,
        private _password: Password,
    ){
    
    }

    get id(): number{
        return this._id;
    }

    get password(): Password{
        return this._password
    }

    get email(): Email{
        return this._email;
    }
}