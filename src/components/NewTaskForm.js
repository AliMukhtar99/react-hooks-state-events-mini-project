import React from "react";

function NewTaskForm({ CATEGORIES, newTask, onInputChange, onTaskFormSubmit }) {
  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={newTask.text}
          onChange={(event) => onInputChange(event)}
        />
      </label>
      <label>
        Category
        <select name="category" onChange={(event) => onInputChange(event)}>
          {CATEGORIES.map((category) => {
            return category === "All" ? null : (
              <option key={category} value={category}>
                {category}
              </option>
            );
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
