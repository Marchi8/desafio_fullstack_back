import { Request, Response } from "express";
import deleteFriendService from "../../services/friend/deleteFriend.service";

const deleteFriendController = async (req: Request, res: Response) => {
    try {
        const { id } = req.user
        const { idFriend } = req.params

        const friend = await deleteFriendService(id, idFriend)

        return res.status(204).send(friend)
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).send({
                error: error.name,
                message: error.message
            })
        }
    }
}

export default deleteFriendController