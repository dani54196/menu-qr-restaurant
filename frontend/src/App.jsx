import { Routes, Route, Outlet, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import Items from "./pages/Items";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="restaurants" element={<Restaurants />} />
        <Route path="items" element={<Items />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
