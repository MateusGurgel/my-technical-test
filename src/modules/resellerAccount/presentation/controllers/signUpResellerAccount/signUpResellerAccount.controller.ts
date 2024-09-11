import { Controller, HttpError, HttpRequest, HttpResponse } from "@/lib/presentation/controller";
import { ResellerAccountSignUpInput } from "./signUpResellerAccount.controller.dto";   
import { SignUpResellerAccountCommand } from "@/modules/resellerAccount/application/commands/signUpResellerAccount/signUpResellerAccount.command";


export class SignUpResellerAccountController implements Controller<ResellerAccountSignUpInput, {}> {

    constructor(private readonly signUpCommand: SignUpResellerAccountCommand) {}

    async handle(httpRequest: HttpRequest<ResellerAccountSignUpInput>): Promise<HttpResponse<{}>> {

        const { email, password, cpf, name } = httpRequest.body;

        if (!email) {
            throw new HttpError(400, "Email is required");
        }

        if (!password) {
            throw new HttpError(400, "Password is required");
        }

        if (!cpf) {
            throw new HttpError(400, "Invalid cpf");
        }

        if (!name) {
            throw new HttpError(400, "Invalid name");
        }

        await this.signUpCommand.handler({ cpf, email, name, password });

        return { body: {}, statusCode: 200, contentType: 'json' };
    }
}
