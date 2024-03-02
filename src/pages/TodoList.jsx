import React, { useEffect } from "react";
import { useState } from "react";
import { DeleteTwoTone } from "@ant-design/icons";
import { Card, Space, Button, Input } from "antd";
import moment from "moment";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [item, setItem] = useState("");
  const [taskTimes, setTaskTimes] = useState([]);

  useEffect(() => {
    if (tasks.length !== 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);
  const onAdd = () => {
    if (item !== "") {
      const currentTime = new Date();
      setTasks([...tasks, item]);
      setTaskTimes([...taskTimes, currentTime]);
    }
    setItem("");
  };

  const onDeleteItem = (index) => {
    const updatedTasks = tasks.filter(
      (item, filterIndex) => filterIndex !== index
    );
    const updatedCompletedTasks = completedTasks.filter(
      (item, filterIndex) => filterIndex !== index
    );
    setTasks(updatedTasks);
    setCompletedTasks(updatedCompletedTasks);
  };

  const onCheck = (index) => {
    const updatedCompletedTasks = [...completedTasks];
    updatedCompletedTasks[index] = !completedTasks[index];
    setCompletedTasks(updatedCompletedTasks);
  };

  const onClearAll = () => {
    setTasks([]);
    setCompletedTasks([]);
  };

  return (
    <Space className="space-container" direction="vertical">
      <div>
        <Space direction="horizontal">
          <Input
            style={{ width: 550 }}
            placeholder="Add your new task..."
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <Button type="primary" onClick={onAdd}>
            ADD
          </Button>
        </Space>
      </div>
      <div>
        <Card title="Todo List" size="small">
          {tasks.map((task, index) => (
            <div className={"container"} key={index}>
              <div className="task-container">
                <input
                  type="checkbox"
                  onChange={() => onCheck(index)}
                  checked={completedTasks[index] === true ? true : false}
                />
                <h4
                  className="tasks"
                  style={{
                    textDecoration:
                      completedTasks[index] === true ? "line-through" : "none",
                  }}
                >
                  {task}
                </h4>
                <DeleteTwoTone
                  style={{
                    fontSize: "20px",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                  onClick={() => onDeleteItem(index)}
                />
                <span className="spanStyle">
                  {moment(taskTimes[index]).format("h:mm a")}
                </span>
              </div>
            </div>
          ))}
        </Card>
        <br />
        <Button className="btn-clear" onClick={onClearAll}>
          Clear All
        </Button>
      </div>
    </Space>
  );
};

export default TodoList;
