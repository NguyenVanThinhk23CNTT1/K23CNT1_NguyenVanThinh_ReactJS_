import React, { useState } from "react";
import "../styles/Nvt.css"; // Import file CSS

const NvtTaskManager = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    // Thêm công việc
    const handleAddTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, { text: newTask, completed: false }]);
            setNewTask(""); // Xóa nội dung ô nhập sau khi thêm
        }
    };

    // Xóa công việc
    const handleDeleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    // Đánh dấu hoàn thành
    const toggleComplete = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    return (
        <div className="Nvt-container">
            <h2>Quản Lý Công Việc</h2>
            <div className="Nvt-task-wrapper">
                <input
                    type="text"
                    className="Nvt-input"
                    placeholder="Nhập công việc..."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button onClick={handleAddTask}>Thêm</button>
            </div>

            {/* Danh sách công việc */}
            <div className="Nvt-task-list">
                {tasks.map((task, index) => (
                    <div key={index} className="Nvt-task-item">
                        <input
                            type="checkbox"
                            className="Nvt-checkbox"
                            checked={task.completed}
                            onChange={() => toggleComplete(index)}
                        />
                        <span className={task.completed ? "Nvt-completed" : ""}>{task.text}</span>
                        <button onClick={() => handleDeleteTask(index)}>X</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NvtTaskManager;
