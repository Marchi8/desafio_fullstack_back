import { Request, Response, NextFunction } from "express";

const ensureData = async (req: Request, res: Response, next: NextFunction) => {
    const requestBody = Object.keys(req.body)

    if (!requestBody.includes("email")
        || !requestBody.includes("phone")
        || !requestBody.includes("name")) {

        return res.status(401).json({
            message: "Need to have fields email, name and phone"
        })
    }

    return next()
}

export default ensureData