import "./App.css";
import Advertisement from "./components/Advertisement";

import Layout from "./Layout";
import { UserContextProvider } from "./UserContext";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
// import Currenthits from "./components/currenthits";
import ViewAllHits from "./pages/ViewAllHits";
import Freshfish from "./pages/Freshfish";
import Home from "./pages/Home";
import MuttonDetails from "./pages/MuttonsDetails";
import DelectableDishes from "./pages/DelectableDishes";

function App() {
  return (
    <>
        <BrowserRouter>
      <UserContextProvider>
          <Layout/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/chicken" element={<Advertisement />} />
          <Route path="/view-all-hits" element={<ViewAllHits/>}/>
          <Route path="/freshfish" element={<Freshfish/>}/>
          <Route path="/mutton" element={<MuttonDetails/>}/>
          <Route path="/delectable" element={<DelectableDishes/>}/>
          </Routes>
      </UserContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
