import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const findOneUserService = async (id: string) => {
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.findOneBy({ id: id })

    if (!users?.isActive) {
        throw new AppError("User not found", 401)
    }

    return { ...users, password: undefined }
}

export default findOneUserService

