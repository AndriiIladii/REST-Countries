import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from '../../pages/DetailPage/DetailPage.module.scss';

const SkeletonDetail = () => {
    return (
        <>
            <button className={styles.backBtn} disabled style={{ opacity: 0.7, cursor: 'default' }}>
                Back
            </button>

            <div className={styles.content}>
                <div className={styles.flagWrapper}>
                    <Skeleton height="100%" style={{ aspectRatio: '16/11', display: 'block' }} />
                </div>

                <div className={styles.details}>
                    <h1 className={styles.name}>
                        <Skeleton width="50%" />
                    </h1>

                    <div className={styles.infoColumns}>
                        <div className={styles.infoLeft}>
                            <p className={styles.detail}><Skeleton width="60%" /></p>
                            <p className={styles.detail}><Skeleton width="70%" /></p>
                            <p className={styles.detail}><Skeleton width="50%" /></p>
                            <p className={styles.detail}><Skeleton width="65%" /></p>
                            <p className={styles.detail}><Skeleton width="45%" /></p>
                        </div>

                        <div className={styles.infoRight}>
                            <p className={styles.detail}><Skeleton width="60%" /></p>
                            <p className={styles.detail}><Skeleton width="70%" /></p>
                            <p className={styles.detail}><Skeleton width="50%" /></p>
                        </div>
                    </div>

                    <div className={styles.borders}>
                        <p className={styles.bordersLabel}><Skeleton width={120} /></p>
                        <div className={styles.borderTags}>
                            <div className={styles.borderTag}><Skeleton width={60} /></div>
                            <div className={styles.borderTag}><Skeleton width={80} /></div>
                            <div className={styles.borderTag}><Skeleton width={70} /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SkeletonDetail;