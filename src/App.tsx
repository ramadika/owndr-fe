import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Destination from "@/pages/Destination";
import Feed from "@/pages/Feed";
import Footer from "@/components/elements/Footer";

function App() {
  return (
    <div className="scroll-smooth">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
