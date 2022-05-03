import { Routes, Route, BrowserRouter } from "react-router-dom";
import TOPPage from "./toppage";
import Test from "./test";
import MaterialUI from "./portfolio/material";
import My from "./portfolio/toppage";

const router = () => {
  console.log("this is router.jsx");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<My />} />
        <Route path="/test" element={<Test />} />
        <Route path="/material-ui-test" element={<MaterialUI />} />
        <Route path="/top" element={<TOPPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
