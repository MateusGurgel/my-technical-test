import { Reseller } from "@/modules/reseller/domain/reseller.domain";

export interface GetResellerInput {
    id: number;
}

export interface GetResellerOutput {
    reseller: Reseller
}