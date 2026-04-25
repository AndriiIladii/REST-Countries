import styles from "./Header.module.scss";
function Header() {

    return (
        <>
            <header>
                <div className={styles.headerContainer}>
                    <h1>
                        Where in the world?
                    </h1>
                    <div>
                        <button>Dark Mode</button>
                    </div>
                </div>
            </header>
        </>
    )
}


export default Header;