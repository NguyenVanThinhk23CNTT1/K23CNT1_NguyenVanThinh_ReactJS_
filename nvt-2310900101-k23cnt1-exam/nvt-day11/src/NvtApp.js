import React, { useState } from "react";
import NvtAccountList from "./components/NvtAccountList";
import NvtAccountAdd from "./components/NvtAccountAdd";
import "./NvtApp.css";

const NvtApp = () => {
  const [accounts, setAccounts] = useState([
    { nvtId: "2310900101", nvtName: "Nguyễn Văn Thịnh", nvtEmail: "thinhvannguyen@gmail.com.com", nvtAmount: 9000 },
    { nvtId: "2310900102", nvtName: "Trần Văn Lữ Bố", nvtEmail: "lubocanhet@gmail.com", nvtAmount: 4000 },
    { nvtId: "2310900103", nvtName: "Lê Thị Florentino", nvtEmail: "florentinocan5@gmail.com", nvtAmount: 5000 }
  ]);

  const addAccount = (newAccount) => {
    setAccounts([...accounts, newAccount]);
  };

  return (
    <div>
      <h1>Quản lý Tài khoản</h1>
      <NvtAccountAdd onAdd={addAccount} />
      <NvtAccountList accounts={accounts} />
    </div>
  );
};

export default NvtApp;