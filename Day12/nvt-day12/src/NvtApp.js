import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NvtHome from "./components/NvtHome";
import NvtGioiThieu from "./components/NvtGioiThieu";
import NvtSanPham from "./components/NvtSanPham";
import NvtTinTuc from "./components/NvtTinTuc";
import NvtLienHe from "./components/NvtLienHe";
import "./Nvt.css"

function NvtApp() {
  return (
    <Router>
      <div>
        <h1 className="text-center text-2xl font-bold p-4">Shop Billiard ReactJS Router</h1>
        <nav>
          <ul className="flex space-x-4 bg-green-200 p-4">
            <li><Link to="/" className="text-blue-500">Trang Chủ</Link></li>
            <li><Link to="/gioi-thieu" className="text-blue-500">Giới Thiệu</Link></li>
            <li><Link to="/san-pham" className="text-blue-500">Sản Phẩm</Link></li>
            <li><Link to="/tin-tuc" className="text-blue-500">Tin Tức</Link></li>
            <li><Link to="/lien-he" className="text-blue-500">Liên Hệ</Link></li>
          </ul>
        </nav>
        <div className="p-4">
          <Routes>
            <Route path="/" element={<NvtHome />} />
            <Route path="/gioi-thieu" element={<NvtGioiThieu />} />
            <Route path="/san-pham" element={<NvtSanPham />} />
            <Route path="/tin-tuc" element={<NvtTinTuc />} />
            <Route path="/lien-he" element={<NvtLienHe />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default NvtApp;
