import { Controller, HttpError, HttpRequest, HttpResponse } from "@/lib/presentation/controller";
import { CreateTransferInput } from "./createTransfer.controller.dto";   
import { SignUpResellerAccountCommand } from "@/modules/resellerAccount/application/commands/signUpResellerAccount/signUpResellerAccount.command";
import { CreateTransferCommand } from "@/modules/transaction/aplication/commands/createTransfer/createTransaction.command";


export class CreateTransferController implements Controller<CreateTransferInput, {}> {

    constructor(private readonly createTransferCommand: CreateTransferCommand) {}

    async handle(httpRequest: HttpRequest<CreateTransferInput>): Promise<HttpResponse<{}>> {

        if(!httpRequest.body.senderId) {
            throw new HttpError(400, "Invalid senderId");
        }

        const senderId =  parseInt(httpRequest.body.senderId)
        const { reciverId, value } = httpRequest.body;

        if (!reciverId || typeof reciverId !== 'number') {
            throw new HttpError(400, "Invalid reciver");
        }

        if (!senderId || typeof senderId !== 'number') {
            throw new HttpError(400, "Invalid sender");
        }

        if (!value || typeof value !== 'number') {
            throw new HttpError(400, "Invalid value");
        }

        await this.createTransferCommand.handler({ reciverId, senderId, value });

        return { body: {}, statusCode: 201, contentType: 'json' };
    }
}
