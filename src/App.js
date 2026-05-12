import "./App.css";

function App() {
  return (
    <div>
      <nav className="navbar">
        <a href="#about">Про мене</a>
        <a href="#city">Моє місто</a>
        <a href="#future">Моє майбутнє</a>
      </nav>

      <section className="section" id="about">
        <h1>Про мене</h1>
        <p>
          Я студентка інформаційних технологій. Вивчаю React, JavaScript
          та веброзробку.
        </p>
      </section>

      <section className="section" id="city">
        <h1>Моє місто</h1>
        <p>
          Моє місто надихає мене на розвиток, навчання та нові можливості.
        </p>
      </section>

      <section className="section" id="future">
        <h1>Моє майбутнє</h1>
        <p>
          Я прагну стати Full Stack Developer та створювати сучасні сайти.
        </p>
      </section>

      <footer className="footer">
        <h2>Контакти</h2>
        <p>GitHub | Instagram</p>
      </footer>
    </div>
  );
}

export default App;