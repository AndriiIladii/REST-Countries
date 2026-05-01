import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

export default function Layout() {

    const { darkMode, toggleTheme } = useTheme();

    return (
        <div className={`appBody ${darkMode ? 'darkTheme' : ''}`}>
            <Header toggleTheme={toggleTheme} darkMode={darkMode} /> <Outlet />
        </div>
    )
}
