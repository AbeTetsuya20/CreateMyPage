import "../stylesheet/styles.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import My from "./portfolio/toppage";
import Header from "../component/parts/header";
import History from "../component/portfolio/history";
import Create from "../component/portfolio/create";

const router = () => {
  console.log("this is router.jsx");

  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <div className="router_body">
        <Routes>
          <Route path="/" element={<My />} />
          <Route path="/history" element={<History />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default router;
