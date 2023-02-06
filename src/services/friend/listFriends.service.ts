import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const listFriendService = async (id: string) => {
    const userRepository = AppDataSource.getRepository(User)
    const friends = await userRepository.findOneBy({ id: id })

    return { ...friends, password: undefined }
};

export default listFriendService;
