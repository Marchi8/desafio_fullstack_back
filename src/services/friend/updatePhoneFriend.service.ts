import AppDataSource from "../../data-source";
import { Friends } from "../../entities/friend.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IFriendUpdate } from "../../interfaces/friends";

const updatePhoneFriendService = async ({ phone }: IFriendUpdate, id: string, idFriend: string) => {
    const userRepository = AppDataSource.getRepository(User)
    const friendsRepository = AppDataSource.getRepository(Friends)

    if (!phone) {
        throw new AppError("Phone field not provided", 404)
    }

    const user = await userRepository.findOneBy({ id: id })

    if (!user) {
        throw new AppError("User Not Found", 404)
    }

    const friend = await friendsRepository.findOneBy({ friendId: idFriend })

    if (!friend) {
        throw new AppError("Friend not found", 404)
    }

    await friendsRepository.update(friend.id, {
        phone: phone,
        updatedAt: new Date(),
    });

    return { message: "User Updated" }
}

export default updatePhoneFriendService