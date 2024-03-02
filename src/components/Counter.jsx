import { useState } from "react";
import { Button } from "antd";

const Counter = () => {
  const [plus, setPlus] = useState(0);
  const upButton = () => {
    setPlus(plus + 1);
  };
  const downButton = () => {
    setPlus(plus - 1);
  };
  return (
    <>
      <Button type="primary" onClick={upButton}>
        UP
      </Button>
      <Button type="primary" onClick={downButton}>
        Down
      </Button>
      <div>
        <h1>{plus}</h1>
      </div>
    </>
  );
};

export default Counter;
