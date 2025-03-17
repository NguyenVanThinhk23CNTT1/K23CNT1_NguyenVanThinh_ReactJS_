import React from "react";

const NvtTodoItem = ({ task, toggleComplete, removeTask }) => {
    return (
        <div style={{ display: "flex", alignItems: "center", margin: "5px 0" }}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
            />
            <span
                style={{
                    textDecoration: task.completed ? "line-through" : "none",
                    marginLeft: "10px",
                    flexGrow: 1,
                }}
            >
                {task.text}
            </span>
            <button onClick={() => removeTask(task.id)} style={{ marginLeft: "10px" }}>
                ❌
            </button>
        </div>
    );
};

export default NvtTodoItem;
