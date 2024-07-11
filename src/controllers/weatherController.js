import axios from 'axios';

export const getCurrentWeather = async(req,res) => {
    console.log('hai');
    const {city} = req.query;
    console.log(city);

    try {
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${city}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({error:"Unable to fetch weather data"})
    }
};

export const getForecast = async (req, res) => {
    const { city } = req.query;
  
    try {
      const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${city}&days=7`);
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Unable to fetch weather data' });
    }
  };
  
  export const getHistorical = async (req, res) => {
    const { city } = req.query;
    const dates = Array.from({ length: 7 }, (_, i) => new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString().split('T')[0]);
  
    try {
      const promises = dates.map(date => axios.get(`http://api.weatherapi.com/v1/history.json?key=${process.env.WEATHER_API_KEY}&q=${city}&dt=${date}`));
      const results = await Promise.all(promises);
      const data = results.map(result => result.data);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Unable to fetch historical weather data' });
    }
  };

