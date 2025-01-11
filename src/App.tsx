import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Destination from "@/pages/Destination";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
