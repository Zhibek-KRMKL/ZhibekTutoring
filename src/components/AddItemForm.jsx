import { setAddItems } from "../reducers/ListReducer";
import { setRemoveItems } from "../reducers/ListReducer";
import { useDispatch } from "react-redux";
import { Button } from "antd";

const AddItemForm = () => {
  const dispatch = useDispatch();

  const arr = ["Hello ", "everyone, ", "I`m ", "a ", "Sonic "];

  const onAddItem = () => {
    dispatch(setAddItems(arr));
  };
  const onRemoveItem = () => {
    dispatch(setRemoveItems(arr));
  };

  return (
    <>
      <h1>Click add if you want to see Mario🤟🏻</h1>
      <div>
        <Button className="character-btn" type="primary" onClick={onAddItem}>
          ADD
        </Button>
      </div>
      <br />
      <Button className="character-btn" type="primary" onClick={onRemoveItem}>
        REMOVE
      </Button>
    </>
  );
};

export default AddItemForm;
