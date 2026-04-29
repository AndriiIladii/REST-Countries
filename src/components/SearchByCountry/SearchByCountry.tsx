import styles from "./SearchByCountry.module.scss";
interface SearchByCountryProps {
    countryName: string;
    setCountryName: (name: string) => void;
}

function SearchByCountry({ countryName, setCountryName }: SearchByCountryProps) {

    return (
        <div className={styles.searchWrapper}>
            <input className={styles.searchInput} type="text" value={countryName} onChange={(e) => setCountryName(e.target.value)} placeholder="Search for a country…" />
        </div>
    )
}

export default SearchByCountry;