import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import darkModeIcon from "../../assets/darkMode.svg";
import lightModeIcon from "../../assets/lightMode.svg";

interface HeaderProps {
    toggleTheme: () => void;
    darkMode: boolean;
}

function Header({ toggleTheme, darkMode }: HeaderProps) {

    return (

        <>
            <header>
                <div className={styles.headerContainer}>
                    <Link to={"/"}><h1>
                        Where in the world?
                    </h1></Link>
                    <div>
                        <button className={styles.themeBtn} onClick={toggleTheme}>
                            {darkMode ? <img src={lightModeIcon} alt="Light Mode" /> : <img src={darkModeIcon} alt="Dark Mode" />}
                            {darkMode ? "Light Mode" : "Dark Mode"}
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;