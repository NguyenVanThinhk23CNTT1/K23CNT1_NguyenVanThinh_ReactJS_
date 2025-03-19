import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const NvtEditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    nvt_name: "",
    nvt_email: "",
    nvt_phone: "",
    nvt_active: false,
  });

  useEffect(() => {
    fetch(`https://67da156235c87309f52ae2be.mockapi.io/K23CNT1_NguyenVanThinh/nvt_users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser({
      ...user,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://67da156235c87309f52ae2be.mockapi.io/K23CNT1_NguyenVanThinh/nvt_users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then(() => navigate("/list-user"))
      .catch((error) => console.error("Error updating user:", error));
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <h2 style={{ textAlign: "center", color: "#2c3e50" }}>Sửa thông tin User</h2>
      <form onSubmit={handleSubmit} style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "10px", background: "#ecf0f1" }}>
        <label>Full Name:</label>
        <input type="text" name="nvt_name" value={user.nvt_name} onChange={handleChange} required style={{ width: "100%", padding: "8px", marginBottom: "10px" }} />
        
        <label>Email:</label>
        <input type="email" name="nvt_email" value={user.nvt_email} onChange={handleChange} required style={{ width: "100%", padding: "8px", marginBottom: "10px" }} />
        
        <label>Phone:</label>
        <input type="text" name="nvt_phone" value={user.nvt_phone} onChange={handleChange} required style={{ width: "100%", padding: "8px", marginBottom: "10px" }} />
        
        <label>Active:</label>
        <div>
          <input type="radio" name="nvt_active" value={true} checked={user.nvt_active === true} onChange={() => setUser({ ...user, nvt_active: true })} /> Hoạt động
          <input type="radio" name="nvt_active" value={false} checked={user.nvt_active === false} onChange={() => setUser({ ...user, nvt_active: false })} style={{ marginLeft: "20px" }} /> Đang khóa
        </div>
        
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <button type="submit" style={{ padding: "10px 20px", background: "#27ae60", color: "white", border: "none", cursor: "pointer", marginRight: "10px" }}>Update</button>
          <button type="button" onClick={() => navigate("/list-user")} style={{ padding: "10px 20px", background: "#c0392b", color: "white", border: "none", cursor: "pointer" }}>Back</button>
        </div>
      </form>
    </div>
  );
};

export default NvtEditUser;
