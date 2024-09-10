import { GetResellerCommand } from "./getReseller.command";
import { resellerRepository } from "@/modules/reseller/infra/database";

export const getResellerCommand =  new GetResellerCommand(resellerRepository)