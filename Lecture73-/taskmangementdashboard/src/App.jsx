import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [completedTasks, setCompletedTasks] = useState([]);
  const [pendingTasks, setPendingTasks] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;

    setLoading(true);
    setTimeout(() => {
      setTasks([...tasks, task.trim()]);
      setTask("");
      setLoading(false);
    }, 300);
  };

  const editTask = (id) => {
    setEditIndex(id);
    setTask(tasks[id]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((_, idx) => idx !== id));
  };

  const handleSave = (id) => {
    const updated = [...tasks];
    updated[id] = task.trim();
    setTasks(updated);
    setEditIndex(null);
    setTask("");
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const index = e.dataTransfer.getData("taskIndex");
    const draggedTask = filteredTasks[index];

    console.log("DROPPED!", e.dataTransfer.getData("taskIndex"));

    setCompletedTasks([...completedTasks, draggedTask]);
    setTasks(tasks.filter((_, idx) => idx !== parseInt(index)));
  };

  // Filter tasks dynamically based on search input
  const filteredTasks = tasks.filter((t) =>
    t.toLowerCase().includes(search.toLowerCase()),
  );

  console.log(completedTasks);
  return (
    <>
      {/* search */}
      <div>
        <input
          type="text"
          placeholder="search a task here"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <br />

      {/* tasks showing */}

      {loading && <div>loading task...</div>}

      <br />

      {/* add task button */}
      {editIndex === null && (
        <div>
          <input
            type="text"
            placeholder="add task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={addTask} disabled={!task.trim()}>
            Add
          </button>
        </div>
      )}

      <div className="columns-container">
        <div className="column">
          {!pendingTasks ? (
            <div></div>
          ) : (
            <div>
              <h3>Pending Tasks </h3>
              {filteredTasks.length ? (
                <div
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => handleDrop(e)}
                >
                  {filteredTasks.map((t, idx) => (
                    <div
                      key={idx}
                      className="task-item"
                      draggable
                      onDrag={(e) => e.preventDefault()}
                      onDragStart={(e) => {
                        e.dataTransfer.setData("taskIndex", idx);
                        console.log("Dragging task:", t);
                      }}
                    >
                      {editIndex === idx ? (
                        <>
                          <input
                            type="text"
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                          />
                          <button onClick={() => handleSave(idx)}>Save</button>
                        </>
                      ) : (
                        <>
                          {t}
                          <button onClick={() => editTask(idx)}>Edit</button>
                          <button onClick={() => deleteTask(idx)}>
                            Delete
                          </button>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                "No tasks found"
              )}
            </div>
          )}
        </div>
        <div
          className="column"
           draggable
          onDrop={(e) => {
            handleDrop(e);
          }}
          onDragOver={(e) => e.preventDefault()}
        >
          {!completedTasks.length ? (
            <h3>No Completed Tasks</h3>
          ) : (
            <div>
              <h3>Completed Tasks</h3>
              {completedTasks.map((item, idx) => (
                <div
                  draggable
                  onDragStart={(e) => {
                    e.dataTransfer.setData("taskIdx", idx);
                    console.log("dragstart", e.dataTransfer.getData("taskIdx"));
                  }}
                  key={idx}
                  className="task-item completed-item"
                >
                  <span>{item}</span>
                  <span className="checkmark">✓</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
