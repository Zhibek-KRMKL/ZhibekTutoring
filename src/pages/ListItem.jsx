import { useSelector } from "react-redux";
import AddItemForm from "../components/AddItemForm";

function ListItem() {
  const listItem = useSelector((state) => state.list.items);
  // const showMario = listItem.some((item) => item.includes("Mario "));
  const showSonic = listItem.some((item) => item.includes("Sonic "));

  return (
    <>
      <AddItemForm />
      <h2>{listItem}</h2>
      <div>
        {/* {showMario ? (
          <img src="src/assets/mario.png" alt="Mario" width="300px" />
        ) : null} */}
        {showSonic ? (
          <img src="src/assets/sonic.png" alt="Sonic" width="300px" />
        ) : null}
      </div>
      <h5>You can also remove the picture😎</h5>
    </>
  );
}

export default ListItem;
