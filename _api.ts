import express,{Request, Response} from "express";
import cors from 'cors'
import usercontroler from './src/controller/uersControler'
import { myDataSource } from "./src/mysql/app-data-sql"

const app = express()

myDataSource
    .initialize()
    .then(() => {
        console.log("Server Mysql Hello")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use('/user', usercontroler)

const port = process.env.PORT || 3000
app.listen(port, () => console.log("Server is runing... " + port))