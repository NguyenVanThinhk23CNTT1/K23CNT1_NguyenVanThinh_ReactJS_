import React from "react";

const NvtAccountList = ({ accounts }) => {
  return (
    <div className="container">
      <h2>🌌 Danh sách Tài khoản 🚀</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Họ và Tên</th>
            <th>Email</th>
            <th>Số Dư</th>
          </tr>
        </thead>
        <tbody>
          {accounts && accounts.length > 0 ? (
            accounts.map((acc) => (
              <tr key={acc.nvtId}>
                <td>{acc.nvtId}</td>
                <td>{acc.nvtName}</td>
                <td>{acc.nvtEmail}</td>
                <td>{acc.nvtAmount.toLocaleString()} $</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center", padding: "10px" }}>
                🚀 Không có tài khoản nào trong không gian!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default NvtAccountList;