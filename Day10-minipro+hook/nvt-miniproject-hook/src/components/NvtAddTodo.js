import React, { useState } from "react";

const NvtAddTodo = ({ addTask }) => {
    const [taskText, setTaskText] = useState("");

    const handleAddTask = () => {
        if (taskText.trim() === "") return;
        addTask(taskText);
        setTaskText("");
    };

    return (
        <div>
            <input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="Nhập công việc..."
            />
            <button onClick={handleAddTask}>Thêm</button>
        </div>
    );
};

export default NvtAddTodo;
