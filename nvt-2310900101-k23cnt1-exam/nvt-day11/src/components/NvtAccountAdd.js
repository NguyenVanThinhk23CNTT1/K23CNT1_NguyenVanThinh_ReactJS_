import React, { useState } from "react";

const NvtAccountAdd = ({ onAdd }) => {
  const [nvtId, setNvtId] = useState("");
  const [nvtName, setNvtName] = useState("");
  const [nvtEmail, setNvtEmail] = useState("");
  const [nvtAmount, setNvtAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ nvtId, nvtName, nvtEmail, nvtAmount: Number(nvtAmount) });
    setNvtId(""); setNvtName(""); setNvtEmail(""); setNvtAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="ID" value={nvtId} onChange={(e) => setNvtId(e.target.value)} required />
      <input type="text" placeholder="Name" value={nvtName} onChange={(e) => setNvtName(e.target.value)} required />
      <input type="email" placeholder="Email" value={nvtEmail} onChange={(e) => setNvtEmail(e.target.value)} required />
      <input type="number" placeholder="Amount" value={nvtAmount} onChange={(e) => setNvtAmount(e.target.value)} required />
      <button type="submit">Thêm</button>
    </form>
  );
};

export default NvtAccountAdd;