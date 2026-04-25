
import type { Country } from "./../../types/country"
import styles from './CountryCard.module.scss'

interface Props {
    country: Country;
}


function CountryCard({ country }: Props) {
    return (
        <div className={styles.card}>
            <div className={styles.flagWrapper}>
                <img className={styles.flag} src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
            </div>
            <div className={styles.info}>
                <h2 className={styles.name}>{country.name.common}</h2>
                <p className={styles.detail}>
                    <span className={styles.label}>Population: </span>
                    {country.population.toLocaleString('en-US')}
                </p>
                <p className={styles.detail}>
                    <span className={styles.label}>Region: </span>
                    {country.region}
                </p>
                <p className={styles.detail}>
                    <span className={styles.label}>Capital: </span>
                    {country.capital?.join(', ')}
                </p>
            </div>
        </div>
    )

}

export default CountryCard;