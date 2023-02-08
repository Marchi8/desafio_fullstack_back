import AppDataSource from "../../data-source";
import { Friends } from "../../entities/friend.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const deleteFriendService = async (id: string, idFriend: string) => {
    const userRepository = AppDataSource.getRepository(User)
    const friendsRepository = AppDataSource.getRepository(Friends)

    const user = await userRepository.findOneBy({ id: id })

    if (!user) {
        throw new AppError("Usuário não encontrado", 404)
    }

    const friend = await friendsRepository.findOneBy({ friendId: idFriend })

    if (!friend) {
        throw new AppError("Usuário não encontrado", 404)
    }

    await friendsRepository.delete(friend.id)

    return true
}

export default deleteFriendService

