import { Request, Response } from "express";
import findOneUserService from "../../services/user/findOneUser.service";

const findOneUserController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const user = await findOneUserService(id)

        return res.send(user)
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).send({
                error: error.name,
                message: error.message
            })
        }
    }
}

export default findOneUserController