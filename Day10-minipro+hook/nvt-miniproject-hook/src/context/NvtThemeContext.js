import { createContext, useState } from "react";

export const NvtThemeContext = createContext();

export const NvtThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <NvtThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={theme}>{children}</div>
        </NvtThemeContext.Provider>
    );
};
