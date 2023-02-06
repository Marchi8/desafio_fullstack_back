import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const deleteUserService = async (id: string) => {
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.findOneBy({ id: id })

    if (!users?.isActive) {
        throw new AppError("User not found", 401)
    }

    await userRepository.update(id, { isActive: false })

    return true
}

export default deleteUserService

