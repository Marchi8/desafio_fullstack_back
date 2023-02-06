import { Request, Response } from "express";
import listFriendService from "../../services/friend/listFriends.service";

const listFriendController = async (req: Request, res: Response) => {
    try {
        const { id } = req.user

        const users = await listFriendService(id)

        return res.send(users)
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).send({
                error: error.name,
                message: error.message
            })
        }
    }
};

export default listFriendController;
