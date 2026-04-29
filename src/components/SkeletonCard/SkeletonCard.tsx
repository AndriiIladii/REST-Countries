import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from '../CountryCard/CountryCard.module.scss';

const SkeletonCard = () => {
  return (
    <div className={styles.card}>
      
      <div className={styles.flagWrapper}>
        <Skeleton height={160} style={{ display: 'block' }} />
      </div>

      <div className={styles.info}>
        <h2 className={styles.name}>
          <Skeleton width="80%" />
        </h2>
        
        <p className={styles.detail}>
          <Skeleton width="60%" />
        </p>

        <p className={styles.detail}>
          <Skeleton width="50%" />
        </p>

        <p className={styles.detail}>
          <Skeleton width="70%" />
        </p>

      </div>
    </div>
  );
};

export default SkeletonCard;