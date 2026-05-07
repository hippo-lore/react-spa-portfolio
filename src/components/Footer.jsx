import { FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#111",
        color: "white",
        padding: "20px",
        marginTop: "40px",
      }}
    >
      <h3>Мої контакти</h3>

      <div
        style={{
          display: "flex",
          gap: "20px",
          fontSize: "25px",
        }}
      >
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>

        <a href="https://instagram.com/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;