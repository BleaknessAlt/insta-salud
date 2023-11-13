import { useState } from "react";
import { FormCheck } from "react-bootstrap";

export function ToggleTheme() {
    const [theme, setTheme] = useState("dark");
    const [displayTheme, setDisplayTheme] = useState("Modo Claro");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
        applyTheme(theme === "light" ? "Modo Claro" : "Modo Oscuro");
        setDisplayTheme(theme == "light" ? "Modo Claro" : "Modo Oscuro");
    };

    const applyTheme = () => {
        document.documentElement.setAttribute("data-bs-theme", theme);
    };

    return (
        <div>
            <FormCheck // prettier-ignore
                type="switch"
                label={displayTheme}
                onChange={toggleTheme}
                id="toggle_theme"
            />
            <label className="" htmlFor="toggle_theme"></label>
        </div>
    );
}

export default ToggleTheme;
