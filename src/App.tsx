import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Destination from "@/pages/Destination";
import Feed from "@/pages/Feed";
import Profile from "@/pages/Profile";

function App() {
  return (
    <div className="scroll-smooth">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
