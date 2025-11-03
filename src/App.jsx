import React from "react";
import ExportToExcel from "./components/ExportToExcel.jsx";
import DataGridTable from "./components/DataGridTable.jsx";

export default function App() {
  const users = [
    { id: 1, name: "Alice", email: "alice@example.com", amount: 1200 },
    { id: 2, name: "Bob", email: "bob@example.com", amount: 900 },
    { id: 3, name: "Charlie", email: "charlie@example.com", amount: 1500 },
  ];
  return (
    <div>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Amount</th>
        </tr>
        {users?.map((user, idx) => (
          <tr key={idx}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.amount}</td>
          </tr>
        ))}
      </table>
      <ExportToExcel data={users} />
      <hr />
      <DataGridTable data={users} />
    </div>
  );
}
