import express from 'express';
import { addFavorite, getFavorite } from '../controllers/favoriteController.js';
import authenticate from '../middleware/authMiddleware.js';

const router = express.Router();


router.post('/',authenticate,addFavorite);
router.get('/',authenticate,getFavorite);

export default router;