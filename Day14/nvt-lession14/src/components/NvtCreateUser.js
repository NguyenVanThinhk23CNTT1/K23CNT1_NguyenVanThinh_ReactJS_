import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NvtCreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [active, setActive] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newUser = {
      nvt_name: name,
      nvt_email: email,
      nvt_phone: phone,
      nvt_active: active,
    };

    fetch("https://67da156235c87309f52ae2be.mockapi.io/K23CNT1_NguyenVanThinh/nvt_users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then(() => {
        alert("User created successfully!");
        navigate("/list-user");
      })
      .catch((error) => console.error("Error adding user:", error));
  };

  return (
    <div>
      <h1>THÊM MỚI THÔNG TIN USER</h1>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div>
          <label>Active:</label>
          <input type="radio" checked={active} onChange={() => setActive(true)} /> Hoạt động
          <input type="radio" checked={!active} onChange={() => setActive(false)} /> Đang khóa
        </div>
        <button type="submit">Create</button>
        <button type="button" onClick={() => navigate("/list-user")}>Back</button>
      </form>
    </div>
  );
};

export default NvtCreateUser;
