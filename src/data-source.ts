import { DataSource } from "typeorm";
import "dotenv/config"
import { User } from "./entities/user.entity";
import { Friends } from "./entities/friend.entity";
import { initial1676095782228 } from "./migrations/1676095782228-initial"

const AppDataSource = new DataSource(
    process.env.NODE_ENV === "test" ?
        {
            type: "sqlite",
            database: ":memory:",
            synchronize: true,
            entities: ["src/entities/*.ts"]
        } :
        {
            type: "postgres",
            host: process.env.DB_HOST,
            port: 5432,
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB,
            logging: true,
            synchronize: true,
            entities: [User, Friends],
            migrations: [initial1676095782228]
        }
)

export default AppDataSource