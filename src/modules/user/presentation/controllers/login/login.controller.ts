import { Controller, HttpError, HttpRequest, HttpResponse } from "@/lib/presentation/controller";
import { LoginInput, LoginOutput } from "./login.controller.dto";   
import { LoginCommand } from "@/modules/user/aplication/commands/login/login.command";


export class LoginController implements Controller<LoginInput, LoginOutput> {

    constructor(private readonly loginCommand: LoginCommand) {

    }

    async handle(httpRequest: HttpRequest<LoginInput>): Promise<HttpResponse<LoginOutput>> {

        if (httpRequest.body.email == null){
            throw new HttpError(400, "Email is required");
        }

        if (httpRequest.body.password == null){
            throw new HttpError(400, "Password is required");
        }

        let response

        response = await this.loginCommand.handler({email: httpRequest.body.email, password: httpRequest.body.password});

        return {body: {token: response.token}, statusCode: 200, contentType: 'json'};
    }
}