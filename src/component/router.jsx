import { Routes, Route, BrowserRouter } from "react-router-dom";
import TOPPage from "./toppage";
import Test from "./test";
import MaterialUI from "./material";
import My from "./portfolio/toppage";

const router = () => {
  console.log("this is router.jsx");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TOPPage />} />
        <Route path="/test" element={<Test />} />
        <Route path="/material-ui-test" element={<MaterialUI />} />
        <Route path="/mysite" element={<My />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
