import { Controller, HttpError, HttpRequest, HttpResponse } from "@/lib/presentation/controller";
import { SignUpShopkeeperAccountInput } from "./signUp.controller.dto";   
import { SignUpShopkeeperAccountCommand } from "@/modules/shopkeeperAccount/application/commands/signUpShopkeeperAccount/signUpShopkeeperAccount.command";


export class SignUpShopkeeperAccountController implements Controller<SignUpShopkeeperAccountInput, {}> {

    constructor(private readonly signUpShopkeeperAccountCommand: SignUpShopkeeperAccountCommand) {}

    async handle(httpRequest: HttpRequest<SignUpShopkeeperAccountInput>): Promise<HttpResponse<{}>> {

        const { email, password, cnpj, name } = httpRequest.body;

        if (!email) {
            throw new HttpError(400, "Email is required");
        }

        if (!password) {
            throw new HttpError(400, "Password is required");
        }

        if (!cnpj) {
            throw new HttpError(400, "Invalid cnpj");
        }

        if (!name) {
            throw new HttpError(400, "Invalid name");
        }

        try {
            await this.signUpShopkeeperAccountCommand.handler({ cnpj: cnpj, email, name, password });
        } catch (error) {
            console.error(error);
            throw new HttpError(500, "Internal server error");
        }

        return { body: {}, statusCode: 200, contentType: 'json' };
    }
}
