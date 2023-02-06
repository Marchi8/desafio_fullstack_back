import { Request, Response } from "express";
import createUserService from "../../services/user/createUser.service";

const createUserController = async (req: Request, res: Response) => {
    try {
        const { name, email, phone, password, isAdm } = req.body

        const newUser = await createUserService({ name, email, phone, password, isAdm })

        return res.status(201).send(newUser)
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).send({
                error: error.name,
                message: error.message
            })
        }
    }
}

export default createUserController