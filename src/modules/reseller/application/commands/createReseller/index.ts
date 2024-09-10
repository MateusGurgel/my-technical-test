import { CreateResellerCommand } from "./createReseller.command";
import { resellerRepository } from "@/modules/reseller/infra/database";

export const createResellerCommand = new CreateResellerCommand(resellerRepository)