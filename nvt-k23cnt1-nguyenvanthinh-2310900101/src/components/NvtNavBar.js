import { Link } from "react-router-dom";
import "./NvtNavBar.css"; // Import file CSS tùy chỉnh

const NvtNavBar = () => {
  return (
    <nav className="nvt-navbar">
      <h1>
        <i className="fas fa-user-astronaut"></i> Nguyễn Văn Thịnh API
      </h1>
      <div className="nav-links">
        <Link to="/">
          <i className="fas fa-home"></i> Trang chủ
        </Link>
        <Link to="/list-user">
          <i className="fas fa-users"></i> Danh sách User
        </Link>
        <Link to="/create-user">
          <i className="fas fa-user-plus"></i> Thêm mới User
        </Link>
      </div>
    </nav>
  );
};

export default NvtNavBar;
