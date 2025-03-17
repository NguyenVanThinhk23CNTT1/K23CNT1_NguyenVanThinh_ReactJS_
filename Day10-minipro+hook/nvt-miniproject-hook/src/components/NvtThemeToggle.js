import React, { useContext } from "react";
import { NvtThemeContext } from "../context/NvtThemeContext";

const NvtThemeToggle = () => {
    const { theme, toggleTheme } = useContext(NvtThemeContext);

    return (
        <button onClick={toggleTheme}>
            Chuyển sang {theme === "light" ? "Tối" : "Sáng"}
        </button>
    );
};

export default NvtThemeToggle;
