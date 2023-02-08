import AppDataSource from "../../data-source";
import { Friends } from "../../entities/friend.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IFriendUpdate } from "../../interfaces/friends";

const updatePhoneFriendService = async ({ phone }: IFriendUpdate, id: string, idFriend: string) => {
    const userRepository = AppDataSource.getRepository(User)
    const friendsRepository = AppDataSource.getRepository(Friends)

    if (!phone) {
        throw new AppError("Campo telefone obrigatório", 404)
    }

    const user = await userRepository.findOneBy({ id: id })

    if (!user) {
        throw new AppError("Usuário não encontrado", 404)
    }

    const friend = await friendsRepository.findOneBy({ friendId: idFriend })

    if (!friend) {
        throw new AppError("Usuário não encontrado", 404)
    }

    await friendsRepository.update(friend.id, {
        phone: phone,
        updatedAt: new Date(),
    });

    return { message: "Contato Atualizado" }
}

export default updatePhoneFriendService