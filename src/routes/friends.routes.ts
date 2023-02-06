import { Router } from "express";
import addFriendController from "../controllers/friend/addFriend.controller";
import deleteFriendController from "../controllers/friend/deleteFriend.controller";
import listFriendController from "../controllers/friend/listFriends.controller";
import updatePhoneFriendController from "../controllers/friend/updatePhoneFriend.controller";
import ensureauthToken from "../middlewares/ensureAuthToken.middleware";
import ensureData from "../middlewares/ensureData.middleware";
import ensureIsAdm from "../middlewares/ensureIsAdm.middleware";

const routes = Router()

export const friendsRoutes = () => {
    routes.post("", ensureauthToken, ensureData, addFriendController)
    routes.get("", ensureauthToken, ensureIsAdm, listFriendController)
    routes.delete("/:idFriend", ensureauthToken, ensureIsAdm, deleteFriendController)
    routes.patch("/:idFriend", ensureauthToken, ensureIsAdm, updatePhoneFriendController)

    return routes
}