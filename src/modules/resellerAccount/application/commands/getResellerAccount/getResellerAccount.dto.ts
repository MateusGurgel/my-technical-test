import { ResellerAccount } from "@/modules/resellerAccount/domain/resellerAccount.domain";

export interface GetResellerAccountInput {
    resellerId: number;
}

export interface GetResellerAccountOutput {
    resellerAccount: ResellerAccount
}