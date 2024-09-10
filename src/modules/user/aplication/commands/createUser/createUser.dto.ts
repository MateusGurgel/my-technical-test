export interface CreateUserInput {
    name: string;
    email: string;
    password: string;
}

export interface CreateUserOutput {
    userId: number;
}