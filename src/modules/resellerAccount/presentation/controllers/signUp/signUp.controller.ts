import { Controller, HttpError, HttpRequest, HttpResponse } from "@/lib/presentation/controller";
import { SignUpInput } from "./signUp.controller.dto";   
import { SignUpCommand } from "@/modules/resellerAccount/application/commands/signUp/signUp.command";


export class SignUpController implements Controller<SignUpInput, {}> {

    constructor(private readonly signUpCommand: SignUpCommand) {}

    async handle(httpRequest: HttpRequest<SignUpInput>): Promise<HttpResponse<{}>> {

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

        try {
            await this.signUpCommand.handler({ cpf, email, name, password });
        } catch (error) {
            console.error(error);
            throw new HttpError(500, "Internal server error");
        }

        return { body: {}, statusCode: 200, contentType: 'json' };
    }
}
