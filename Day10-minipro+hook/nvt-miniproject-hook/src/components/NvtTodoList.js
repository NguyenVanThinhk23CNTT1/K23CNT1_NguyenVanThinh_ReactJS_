import React from "react";
import NvtTodoItem from "./NvtTodoItem";

const NvtTodoList = ({ tasks, setTasks }) => {
    const toggleComplete = (taskId) => {
        setTasks(
            tasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const removeTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    return (
        <div>
            {tasks.map((task) => (
                <NvtTodoItem
                    key={task.id}
                    task={task}
                    toggleComplete={toggleComplete}
                    removeTask={removeTask}
                />
            ))}
        </div>
    );
};

export default NvtTodoList;
