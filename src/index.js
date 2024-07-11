import express from 'express';
import cors from 'cors'

import authRoutes from './routes/authRoutes.js'
import weatherRoutes from './routes/weatherRoutes.js'
import favoriteRoutes from './routes/favoriteRoutes.js'
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/auth',authRoutes);
app.use('/api/weather',weatherRoutes);
app.use('/api/favorite',favoriteRoutes);



const PORT = process.env.PORT | 5000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT} `);
})