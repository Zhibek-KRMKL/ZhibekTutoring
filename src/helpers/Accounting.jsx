// import "./Index.css"
// import React, { useState } from "react";
// import { Button, Input, Space } from "antd";

// function Accounting() {
//   const [expenses, setExpenses] = useState([]);
//   const [newExpense, setNewExpense] = useState("");

//   const addExpense = () => {
//     newExpense !== ""
//       ? (setExpenses([...expenses, newExpense]), setNewExpense(""))
//       : null;
//   };
//   return (
//     <div>
//       <h2 className="head-h2">Учет расходов</h2>
//       <Space direction="horizontal">
//         <Input
//           style={{
//             width: 350,
//             color: "grey",
//           }}
//           type="text"
//           placeholder="accounting..."
//           value={newExpense}
//           onChange={(e) => setNewExpense(e.target.value)}
//         />
//         <Button style={{ color: "#ccc" }} onClick={addExpense}>
//           Добавить расход
//         </Button>
//       </Space>
//       <ul>
//         {expenses.map((expense, key) => (
//           <li key={key}>{expense}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Accounting;
