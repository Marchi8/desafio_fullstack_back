import AppDataSource from "../../data-source";
import { IUserRequest } from "../../interfaces/users";
import { User } from "../../entities/user.entity";
import bcrypt from "bcrypt";
import { AppError } from "../../errors/appError";

const createUserService = async ({ name, email, phone, password, isAdm }: IUserRequest) => {
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()

    const emailAlreadyExists = users.find(user => user.email === email)

    if (emailAlreadyExists) {
        throw new AppError("Email já cadastrado", 400)
    }

    const phoneAlreadyExists = users.find(user => user.phone === phone)

    if (phoneAlreadyExists) {
        throw new AppError("Telefone já cadastrado", 400)
    }

    const nameAlreadyExists = users.find(user => user.name === name)

    if (nameAlreadyExists) {
        throw new AppError("Nome já cadastrado", 400)
    }

    const user = new User()
    user.name = name;
    user.email = email;
    user.phone = phone;
    user.password = bcrypt.hashSync(password, 10);
    user.isAdm = isAdm;
    user.isActive = true;
    user.createdAt = new Date()

    userRepository.create(user)
    await userRepository.save(user)

    return { ...user, password: undefined }
};

export default createUserService