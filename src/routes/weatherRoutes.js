import express from 'express'
import { getCurrentWeather, getForecast, getHistorical } from '../controllers/weatherController.js';



const router = express.Router();


router.get('/current',getCurrentWeather);
router.get('/forecast',getForecast);
router.get('/historical',getHistorical); 

export default router;