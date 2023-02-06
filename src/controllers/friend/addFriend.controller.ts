import { Request, Response } from "express";
import addFriendService from "../../services/friend/addFriend.service";

const addFriendController = async (req: Request, res: Response) => {
    try {
        const { name, email, phone } = req.body
        const { id } = req.user

        const friend = await addFriendService({ name, email, phone }, id)

        return res.status(201).json({ message: friend })
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).send({
                error: error.name,
                message: error.message
            })
        }
    }

}

export default addFriendController