import { createTransferCommand } from "@/modules/transaction/aplication/commands/createTransfer";
import { CreateTransferController } from "./createTransfer.controller";

export const createTransferController = new CreateTransferController(createTransferCommand)