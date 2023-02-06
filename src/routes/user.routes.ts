import { Router } from "express";
import userCreateController from "../controllers/user/createUser.controller";
import userDeleteController from "../controllers/user/deleteUser.controller";
import findOneUserController from "../controllers/user/findOneUser.controller";
import userListController from "../controllers/user/listUser.controller";
import userUpdateController from "../controllers/user/userUpdate.controller";
import ensureauthToken from "../middlewares/ensureAuthToken.middleware";
import ensureIsAdm from "../middlewares/ensureIsAdm.middleware";
import ensureUpdate from "../middlewares/ensureUpdate.middleware";


const routes = Router()

export const userRoutes = () => {
    routes.post("", userCreateController)
    routes.get("", ensureauthToken, ensureIsAdm, userListController)
    routes.delete("/:id", ensureauthToken, ensureIsAdm, userDeleteController)
    routes.get("/:id", ensureauthToken, ensureIsAdm, findOneUserController)
    routes.patch("/:id", ensureauthToken, ensureUpdate, userUpdateController)

    return routes
}