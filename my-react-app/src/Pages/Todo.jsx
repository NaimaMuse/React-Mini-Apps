import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function addTask() {
    if (task.trim() === "") return;

    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = task;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, task]);
    }

    setTask("");
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);

    if (editIndex === index) {
      setTask("");
      setEditIndex(null);
    }
  }

  function editTask(index) {
    setTask(tasks[index]);
    setEditIndex(index);
  }

  return (
    <div className="todo-page">

      <div className="todo-header">
        <h1>Todo App</h1>
        <p>Manage your daily tasks</p>
      </div>

      <div className="todo-card">

        <div className="todo-input-group">

          <input
            type="text"
            placeholder="Enter a task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button onClick={addTask}>
            {editIndex !== null ? "Update" : "Add"}
          </button>

        </div>

        <div className="todo-list">

          {tasks.length === 0 ? (
            <p className="empty-task">No tasks yet.</p>
          ) : (
            <ul>
              {tasks.map((item, index) => (
                <li key={index} className="todo-item">

                  <span>{item}</span>

                  <div className="todo-buttons">

                    <button
                      className="edit-btn"
                      onClick={() => editTask(index)}
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => deleteTask(index)}
                    >
                      Delete
                    </button>

                  </div>

                </li>
              ))}
            </ul>
          )}

        </div>

      </div>

    </div>
  );
}

export default Todo;