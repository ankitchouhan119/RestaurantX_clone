import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Menu from "./pages/Menu.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import OurMenu from "./pages/Our_menu.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/Menu" element={<Menu />} />
<Route path="/aboutUs" element={<AboutUs />} />
<Route path="/Our_menu" element={<OurMenu />} />
    </Routes>
  );
}
