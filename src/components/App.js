import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [newTask, setNewTask] = useState({ text: "", category: "code" });
  const [newTaskList, setNewTaskList] = useState([...TASKS]);

  function onInputChange(event) {
    setNewTask(() => {
      return { ...newTask, [event.target.name]: event.target.value };
    });
  }

  function onTaskFormSubmit(event) {
    event.preventDefault();
    setNewTaskList([...newTaskList, newTask]);
    setNewTask({ ...newTask, text: "" });
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        setSelectedCategory={setSelectedCategory}
        CATEGORIES={CATEGORIES}
      />
      <NewTaskForm
        CATEGORIES={CATEGORIES}
        newTask={newTask}
        onInputChange={onInputChange}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList selectedCategory={selectedCategory} TASKS={newTaskList} />
    </div>
  );
}

export default App;
