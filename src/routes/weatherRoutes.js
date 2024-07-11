import express from 'express'
import { getCurrentWeather, getForecast, getHistorical } from '../controllers/weatherController.js';
import authenticate from '../middleware/authMiddleware.js';



const router = express.Router();


router.get('/current',authenticate,getCurrentWeather);
router.get('/forecast',authenticate,getForecast);
router.get('/historical',authenticate,getHistorical); 

export default router;