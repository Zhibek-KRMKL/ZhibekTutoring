// import React from "react";
// import "./Index.css";
// import { useState } from "react";

// const NewTodoList = () => {
//   const [object, setObject] = useState([]);  //1-  создала массив чтобы отслеживать введеyный object
//   const [item1, setItem1] = useState(""); // 2-   массив отвечающий за инпут 

//   const onAdd1 = () => {  //6- в стрелочной функции дали уловие, что если наш инпут не будет пустым, то пожлуйста 
//     if (item1 !== "") {
//       setObject([...object, item1]); //7- то пожалуйста сделай так чтобы в состояние котроая отвечает за наш object, то есть скопировал из object в item1 
//     }
//     setItem1(""); // 8- и потом это отобрази в интерфейсе как пустое поле
//   };

//   const onDeleteItem1 = (index) => {
//     const updatedObject = object.filter(
//       (item, filterIndex1) => filterIndex1 !== index
//     );
//     setObject(updatedObject);
//   };

//   return ( 
//     <>
//       <div>
//         <h2>to do list</h2>
//         <input        
//           type="text"
//           placeholder="type..."
//           value={item1} //// 3- инпут где мы дали значение item1
//           onChange={(e) => setItem1(e.target.value)}  //4- тут в onChange мы присвоили событие (е) и дали функцию через setItem1(e.target.value) чтобы отслеживать обновленное состояние item
//         />
//         <button onClick={onAdd1}>add</button> 
//         {object.map((objects, index) => ( //5- создали кнопку присвоили к функцию
//           <div key={index}> 
//             <h4>{objects}</h4> 
//             <button onClick={() => onDeleteItem1(index)}>delete</button>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default NewTodoList;
