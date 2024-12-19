import  express,{ Request, Response, Router}  from "express";
import { users, users_save, user_delete, users_edit} from "../apiconnext_/useconnext";

const router = express.Router()

router.get('/sayHi', (req: Request, res: Response) => {
    res.json({ mgs: 'Hello World User Wow api '})
})

router.get('/users', users)
router.post('/users', users_save)
router.delete('/users/:id', user_delete)
router.put('/users/:id', users_edit)


export default router