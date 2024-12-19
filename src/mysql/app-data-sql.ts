import { DataSource } from "typeorm"
import { User } from "../entity/user.entity"
import dotenv from 'dotenv';
dotenv.config();
console.log(2222,process.env.HOST)
export const myDataSource = new DataSource({
    type: "mysql",
    host: process.env.HOST,
    port: 3306,
    username: process.env.USERNAMES,
    password: process.env.PASSWORD ,
    database: process.env.DATABASE,
    entities: [User],
    logging: true,
    synchronize: true,
})