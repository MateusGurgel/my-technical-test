import { db } from "@/infra/database/connection";
import { ResellerRepository } from "./reseller.repo";

export const resellerRepository = new ResellerRepository(db)