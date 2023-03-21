import { Routes, Route, Outlet, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="restaurant" element={<Restaurant />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
