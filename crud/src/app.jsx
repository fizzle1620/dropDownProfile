import { useState } from 'preact/hooks';
import './app.css';

export function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      complete: false,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, complete: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <h1>TodoList App</h1>
      </div>
      <div className="addTask">
        <input
          type="text"
          placeholder="Enter a new task"
          onChange={handleChange}
          value={newTask}
        />
        <button className="addButton" onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <div key={task.id} className={`task ${task.complete ? 'completed' : ''}`}>
              <h3 className="taskName">{task.taskName}</h3>
              <div className="buttons">
                <button
                  className={`completeButton ${task.complete ? 'disabled' : ''}`}
                  onClick={() => completeTask(task.id)}
                  disabled={task.complete}
                >
                  Complete
                </button>
                <button
                  className="deleteButton"
                  onClick={() => deleteTask(task.id)}
                >
                  x
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
