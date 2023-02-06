import { Express } from "express";
import { friendsRoutes } from "./friends.routes";
import { sessionRoutes } from "./session.routes";
import { userRoutes } from "./user.routes";

export const appRoutes = (app: Express) => {
    app.use("/users", userRoutes())
    app.use("/login", sessionRoutes())
    app.use("/friends", friendsRoutes())
}