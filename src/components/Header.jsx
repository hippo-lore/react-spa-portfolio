import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{
        background: "#111",
        padding: "20px",
      }}
    >
      <nav
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Link to="/">Про мене</Link>

        <Link to="/my-city">Моє місто</Link>

        <Link to="/my-future">Моє майбутнє</Link>
      </nav>
    </header>
  );
};

export default Header;