import styles from './Page404.module.scss';
import { Link } from "react-router";

function Page404() {


    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                <div className={styles.leftSection}>
                    <div className={styles.errorCode}>
                        <span>4</span>
                        <div className={styles.circle}></div>
                        <span>4</span>
                    </div>
                    <h1>Page Not Found</h1>
                    <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                    <Link to="/" className={styles.homeBtn}>
                        <span className={styles.btnText}>Back to Home</span>
                        <svg className={styles.arrow} width="24" height="24" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
                <div className={styles.rightSection}>
                    <div className={styles.decoration}>
                        <div className={`${styles.line} ${styles.line1}`}></div>
                        <div className={`${styles.line} ${styles.line2}`}></div>
                        <div className={`${styles.line} ${styles.line3}`}></div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Page404;