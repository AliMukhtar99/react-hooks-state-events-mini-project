import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  function updateTask(newTask) {
    setTasks([...tasks, newTask]);
  }
  // const updateTasks = (newTask) => {
  //    setList([...list, newTask])

  // }
  function deleteTask(deletedTaskText) {
    setTasks(tasks.filter((task) => task.text !== deletedTaskText));
  }
  const tasksToShow = tasks.filter(
    (task) => category === "All" || task.category === category
  );

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={category}
        onSelectCategory={setCategory}
      />
      <NewTaskForm onTaskFormSubmit={updateTask} categories={CATEGORIES} />
      <TaskList tasks={tasksToShow} taskDelete={deleteTask} />
    </div>
  );
}

export default App;
