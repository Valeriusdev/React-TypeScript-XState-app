import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ToggleMachine from "./pages/ToggleMachine";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toggle-machine" element={<ToggleMachine />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
