import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addFavorite = async(req,res) => {
    const {city} = req.body;
    const userId = req.userId;

    try {
        const favorite = await prisma.city.create({
            data:{
                name:city,
                userId
            }
        });
        res.status(201).json(favorite);
    } catch (error) {
        res.status(500).json({error:"Unable to add favorite city"});
    };
};

export const getFavorite = async (req,res) => {
    const userId = req.userId;

    try {
        const favorite = await prisma.city.findMany({
            where:{userId},
            include:{
                user:true,
            }
        })
        res.json(favorite);
    } catch (error) {
        res.status(500).json({error:"Unable to fetch favorite cities"})
    }
}