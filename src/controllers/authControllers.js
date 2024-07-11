
import bcrypt from 'bcryptjs';
import  {PrismaClient} from '@prisma/client'
import generateToken from '../utils/jwt.js';



const prisma = new PrismaClient();

export const registerUser = async(req,res) => {
   const {email,password} = req.body;

   try {
    //hashing password
    const hashedPassword = await bcrypt.hash(password,10);
    const user = await prisma.user.create({
        data:{
            email,
            password:hashedPassword,
        }
    });
    res.status(201).json({message:"User Registered successfully"})
   } catch (error) {
        res.status(400).json({error:"User already exist"})
   }
}

export const loginUser = async (req,res) => {
    const {email,password} = req.body;
    try {
        const user = await prisma.user.findUnique({
            where:{email}
        });
        if(!user){
            return res.status(401).json({error:"Invalid credentials"})
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(401).json({error:'Invalid credentials'})
        }
        const token = generateToken(user.id);
        res.json({token});
    } catch (error) {
        res.status(500).json({error:"Internal server error"})
    }
}