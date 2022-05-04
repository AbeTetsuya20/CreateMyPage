import { Routes, Route, BrowserRouter } from "react-router-dom";
import My from "./portfolio/toppage";
import Header from "../component/parts/header";
import History from "../component/portfolio/history";
import Create from "../component/portfolio/create";

const router = () => {
  console.log("this is router.jsx");

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<My />} />
        <Route path="/history" element={<History />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
