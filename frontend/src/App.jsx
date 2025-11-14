import "./App.css";
import Advertisement from "./components/Advertisement";
import Layout from "./Layout";
import { UserContextProvider } from "./UserContext";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Advertisement />} />
            <Route path="/chicken" element={<Advertisement />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
