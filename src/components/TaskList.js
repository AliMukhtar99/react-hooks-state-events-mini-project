import React from "react";
import Task from "./Task";

function TaskList({ tasks, taskDelete }) {
  // const handleDelete = (id) => {
  //   const filteredList = list.filter((item, index) => {
  //     return index !== id;
  //   });
  //   setList(filteredList)
  // }
  const taskList = tasks.map((task) => (
    <Task
      key={task.text}
      text={task.text}
      category={task.category}
      taskDelete={taskDelete}
    />
  ));
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {taskList}
    </div>
  );
}

export default TaskList;
