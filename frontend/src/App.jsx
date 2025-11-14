import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Currenthits from "./components/currenthits";
import ViewAllHits from "./pages/ViewAllHits";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Currenthits/>}/>
          <Route path="/view-all-hits" element={<ViewAllHits/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
