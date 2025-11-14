import "./App.css";
import Advertisement from "./components/Advertisement";
import Home from "./Home";
import Layout from "./Layout";
import { UserContextProvider } from "./UserContext";
import { Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/chicken" element={<Advertisement />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
