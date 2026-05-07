import axios from "axios";

export const fetchWeather = async () => {
  try {
    const response = await axios.get(
      "https://goweather.herokuapp.com/weather/Kyiv"
    );

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};