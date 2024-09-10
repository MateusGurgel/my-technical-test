import { User } from "@/modules/user/domain/user.domain";

export interface GetUserInput {
    id: number;
}

export interface GetUserOutput {
    user: User
}