import { Request, Response } from "express";
import updatePhoneFriendService from "../../services/friend/updatePhoneFriend.service";

const updatePhoneFriendController = async (req: Request, res: Response) => {
    try {
        const data = req.body
        const { id } = req.user
        const { idFriend } = req.params

        const user = await updatePhoneFriendService(data, id, idFriend)

        return res.status(200).json(user)
    } catch (error) {
        if (error instanceof Error) {
            return res.status(404).json({
                error: error.name,
                message: error.message,
            })
        }
    }
}

export default updatePhoneFriendController