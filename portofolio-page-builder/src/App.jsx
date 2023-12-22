import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Landing from "./pages/landing";
import AddPortfolio from "./pages/add_portfolio";
import ViewPortfolio from "./pages/view_portfolio";

const App = () => {
  axios.defaults.baseURL =
    "https://6583e07d4d1ee97c6bce711f.mockapi.io/iexperience/";

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<AddPortfolio />} path="/builder/edit_portofolio" />
        <Route element={<ViewPortfolio />} path="/builder/view_portofolio" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
