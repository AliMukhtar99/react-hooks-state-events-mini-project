import React, { useState } from "react";
import Task from "./Task";
function TaskList({ selectedCategory, TASKS }) {
  const selectedCategoryTasks = TASKS.filter((task) => {
    if (selectedCategory === "All") return true;
    return task.category === selectedCategory;
  });
  const [displayedTasks, setDisplayedTasks] = useState(selectedCategoryTasks);

  function handleDelete(text) {
    setDisplayedTasks(() => {
      return displayedTasks.filter((task) => task.text !== text);
    });
  }

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {displayedTasks.map((task, index) => {
        return <Task key={index} task={task} handleDelete={handleDelete} />;
      })}
    </div>
  );
}

export default TaskList;
