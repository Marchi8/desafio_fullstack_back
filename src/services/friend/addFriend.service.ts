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
        throw new AppError("Incorrect UserId", 404);
    }
    const user = await userRepository.findOneBy({ name: name });

    if (!user) {
        throw new AppError("User not found", 404);
    }

    if (user.id === id) {
        throw new AppError("Cannot add own user", 404);
    }

    const friendExists = await friendsRepository.findOneBy({ friendId: user.id });

    if (friendExists) {
        throw new AppError("Friend already exists", 404);
    }

    const contact = friendsRepository.create({
        email: email,
        phone: phone,
        name: name,
        userId: id,
        friendId: user.id,
    });

    await friendsRepository.save(contact);

    return `${contact.name} has been added to friend list`
}

export default addFriendService