import { UserRepository } from "./user.repo";
import { db } from "@/infra/database/connection";

export const userRepository = new UserRepository(db);