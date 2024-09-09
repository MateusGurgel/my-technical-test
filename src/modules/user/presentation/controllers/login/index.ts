import { loginCommand } from "@/modules/user/aplication/commands/login";
import { LoginController } from "./login.controller";

export const loginController = new LoginController(loginCommand)