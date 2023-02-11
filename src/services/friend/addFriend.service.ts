import AppDataSource from "../../data-source";
import { Friends } from "../../entities/friend.entity";
import { IFriendRequest } from "../../interfaces/friends"
import { AppError } from "../../errors/appError";
import { User } from "../../entities/user.entity";
import { randomUUID } from "crypto";

const addFriendService = async (
    { name, email, phone }: IFriendRequest, id: string) => {
    const friendsRepository = AppDataSource.getRepository(Friends)
    const userRepository = AppDataSource.getRepository(User)
    const userId = await userRepository.findOneBy({ id: id })

    if (!userId) {
        throw new AppError("Usuário não encontrado", 404)
    }
    const user = await userRepository.findOneBy({ name: name })

    const contact = friendsRepository.create({
        email: email,
        phone: phone,
        name: name,
        userId: id,
        friendId: user?.id ? user?.id : randomUUID(),
        updatedAt: new Date(),
        createdAt: new Date()
    })

    await friendsRepository.save(contact)

    return contact
}

export default addFriendService