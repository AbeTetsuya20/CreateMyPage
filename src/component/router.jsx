import { Routes, Route, BrowserRouter } from "react-router-dom";
import TOPPage from "./toppage";
import Test from "./test";

const router = () => {
  console.log("this is router.jsx");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TOPPage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
