import AppDataSource from "../../data-source";
import { Friends } from "../../entities/friend.entity";
import { IFriendRequest } from "../../interfaces/friends"
import { AppError } from "../../errors/appError";
import { User } from "../../entities/user.entity";

const addFriendService = async ({ name, email, phone }: IFriendRequest, id: string) => {
    const friendsRepository = AppDataSource.getRepository(Friends);
    const userRepository = AppDataSource.getRepository(User);
    const userId = await userRepository.findOneBy({ id: id });

    if (!userId) {
        throw new AppError("Usuário não encontrado", 404);
    }
    const user = await userRepository.findOneBy({ name: name });

    if (!user) {
        throw new AppError("Usuário não encontrado", 404);
    }

    if (user.id === id) {
        throw new AppError("Impossível adicionar a si mesmo", 404);
    }

    const friendExists = await friendsRepository.findOneBy({ friendId: user.id });

    if (friendExists) {
        throw new AppError("Usuário já adicionado", 404);
    }

    const contact = friendsRepository.create({
        email: email,
        phone: phone,
        name: name,
        userId: id,
        friendId: user.id,
    });

    await friendsRepository.save(contact);

    return contact
}

export default addFriendService