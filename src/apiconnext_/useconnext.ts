import { Request, Response, NextFunction } from 'express'
import { myDataSource } from '../mysql/app-data-sql'
import { User } from '../entity/user.entity'
import bcrypt from 'bcrypt'

export const users = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const users = await myDataSource.getRepository(User).find()
        res.json(users)
    }catch(err){
        next(err)
        console.error("Errr type", err)
        res.status(401).json({ Error: "Error user Show 401", err})
    }
}

export const users_save = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ error: "Email and password are required." });
        }
        const userRepository = await myDataSource.getRepository(User)
        const existingUser = await userRepository.findOne({ where: { email: req.body.email } });
        console.log(5555,existingUser)
        if(existingUser){
            res.status(409).json({ error: "Email already exists." });
        }else{
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            req.body.password = hashedPassword;
            const user_save = await userRepository.save(req.body)
            user_save ? res.json({mgs: "Save Goode api user", user_save}) : res.status(400).json({error: "api Error Type 400"});
        }
    }catch(err){
        next(err)
        console.error("Errr type", err)
        res.status(401).json({ Error: "Error user Show 401", err})
    }
}

export async function user_delete  (req: Request, res: Response, next: NextFunction){
    try{
        const users = await myDataSource.getRepository(User)
        const user_Detele = users.delete(req.params.id)
        res.json({mgs: "Delete User", user_Detele})
    }catch(err){
        next(err)
        console.error("Errr type", err)
        res.status(401).json({ Error: "Error user Show 401", err})
    }
}

export const users_edit = async (req:Request, res: Response, next: NextFunction) => {
    try {
        const userRepository = myDataSource.getRepository(User);

        const cheke_user: any = await userRepository.findOne({ where: { id: Number(req.params.id) }});
        if (!cheke_user) {
            res.status(404).json({ error: "User not found" });
        }
        const tx = userRepository.merge(cheke_user, req.body);
        console.log(tx)
        const result = await userRepository.save(cheke_user);
         res.json(result);
    } catch (error) {
        next(error);
        console.error("Error updating user:", error);
         res.status(500).json({ error: "An error occurred while updating the user" });
    }
}