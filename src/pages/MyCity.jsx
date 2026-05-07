import { useEffect, useState } from "react";
import { fetchWeather } from "../api/weatherApi";

const MyCity = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const loadWeather = async () => {
      const data = await fetchWeather();
      setWeather(data);
    };

    loadWeather();
  }, []);

  return (
    <div>
      <h1>Мої міста</h1>

      <h2>Київ</h2>

      <p>
        Київ — столиця України та одне з найбільших міст країни.
        Місто відоме своєю історією, архітектурою,
        культурою та великою кількістю можливостей для розвитку.
      </p>

      <p>
        У Києві активно розвивається IT-сфера,
        працює багато сучасних компаній та стартапів.
      </p>

      <h2>Рівне</h2>

      <p>
        Рівне — затишне місто на заході України.
        Воно відоме своєю спокійною атмосферою,
        зеленими зонами та комфортом для життя.
      </p>

      <p>
        Місто поступово розвивається у сфері освіти,
        технологій та молодіжних проєктів.
      </p>

      {weather && (
        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            background: "#222",
            borderRadius: "10px",
          }}
        >
          <h2>Поточна погода</h2>

          <p>Місто: Kyiv</p>

          <p>Температура: {weather.temperature}</p>

          <p>Вітер: {weather.wind}</p>

          <p>Опис: {weather.description}</p>
        </div>
      )}
    </div>
  );
};

export default MyCity;