import { useState } from "react";
import { FormCheck } from "react-bootstrap";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export function ToggleTheme() {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
        applyTheme(theme === "light" ? "Modo Claro" : "Modo Oscuro");
    };

    const applyTheme = () => {
        document.documentElement.setAttribute("data-bs-theme", theme);
    };

    return (
        <>
            <DarkModeSwitch className="toggleTheme" checked={theme == "dark"} onChange={toggleTheme} size={30} />
        </>
    );
}

export default ToggleTheme;
