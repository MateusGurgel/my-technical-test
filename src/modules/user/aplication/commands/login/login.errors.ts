export class InvalidCredentials extends Error{
    constructor(){
        super('Invalid login');
    }
}