import { userRepository } from '@/modules/user/infra/database'
import { LoginCommand } from './login.command'



export const loginCommand = new LoginCommand(userRepository)