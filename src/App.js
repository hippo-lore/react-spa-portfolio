import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import AboutMe from "./pages/AboutMe";
import MyCity from "./pages/MyCity";
import MyFuture from "./pages/MyFuture";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          minHeight: "100vh",
          background: "#1a1a1a",
          color: "white",
          padding: "20px",
        }}
      >
        <Header />

        <Routes>
          <Route path="/" element={<AboutMe />} />

          <Route path="/my-city" element={<MyCity />} />

          <Route path="/my-future" element={<MyFuture />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;