import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/landing";
import AddPortfolio from "./pages/add_portfolio";
import ViewPortfolio from "./pages/view_portfolio";

const App = () => {
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
