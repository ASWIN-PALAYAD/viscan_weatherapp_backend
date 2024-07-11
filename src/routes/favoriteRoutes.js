import express from 'express';
import { addFavorite, getFavorite } from '../controllers/favoriteController.js';

const router = express.Router();


router.post('/',addFavorite);
router.get('/',getFavorite);

export default router;