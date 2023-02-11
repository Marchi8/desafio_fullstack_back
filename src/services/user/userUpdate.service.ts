import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const updateUserService = async (update: Partial<User>, id: string): Promise<Array<object | number>> => {
    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOneBy({ id: id })
    const { phone, email } = update;

    if (!user) {
        throw new AppError("User not found", 401)
    }

    const updatedUser = {
        email: email,
        phone: phone
    }

    await userRepository.update(user.id, {
        ...updatedUser,
        updatedAt: new Date(),
    })

    return [{ message: "Usuário atualizado" }, 200]
}

export default updateUserService