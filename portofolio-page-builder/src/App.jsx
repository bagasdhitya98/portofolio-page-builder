import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/landing";
import EditPorto from "./pages/edit";
import ViewPorto from "./pages/view";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<EditPorto />} path="/builder/edit_portofolio" />
        <Route element={<ViewPorto />} path="/builder/view_portofolio" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
