import styles from "./SearchByCountry.module.scss";


function SearchByCountry({ countryName, setCountryName }) {

    return (
        <div className={styles.searchWrapper}>
            <input className={styles.searchInput} type="text" value={countryName} onChange={(e) => setCountryName(e.target.value)} placeholder="Search for a country…" />
        </div>
    )
}

export default SearchByCountry;