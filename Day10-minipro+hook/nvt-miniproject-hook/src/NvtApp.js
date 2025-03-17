import React, { useState } from "react";
import { NvtThemeProvider } from "./context/NvtThemeContext";
import NvtThemeToggle from "./components/NvtThemeToggle";
import NvtTodoList from "./components/NvtTodoList";
import NvtAddTodo from "./components/NvtAddTodo";
import "./styles/Nvt.css";
import NvtTaskManager from "./components/NvtTaskManager";

const NvtApp = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (taskText) => {
        setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
    };

    return (
        <NvtThemeProvider>
            <div className="container">
                <h2>Quản Lý Công Việc</h2>
                <NvtThemeToggle />
                <NvtAddTodo addTask={addTask} />
                <NvtTodoList tasks={tasks} setTasks={setTasks} />
                
            </div>
        </NvtThemeProvider>
        
    );
};

export default NvtApp;
