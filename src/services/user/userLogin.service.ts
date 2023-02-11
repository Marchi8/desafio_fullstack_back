import { IUserLogin } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { compare } from "bcrypt"
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../../errors/appError";

const userLoginService = async ({ email, password }: IUserLogin): Promise<{}> => {
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.findOneBy({ email: email })

    if (!users) {
        throw new AppError("Email ou senha inválido", 401)
    }
    const passwordMatch = await compare(password, users.password)

    if (!passwordMatch) {
        throw new AppError("Email ou senha inválido", 401)
    }

    const token = jwt.sign({ id: users.id, isAdm: users.isAdm }, String(process.env.JWT_SECRET) as string, {
        expiresIn: "1d"
    })

    const id = {
        ...users,
        password: undefined
    }

    return { token, user: id }
}

export default userLoginService