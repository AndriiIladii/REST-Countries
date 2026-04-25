import CountryCard from "../CountryCard/CountryCard";
import { Link } from "react-router";
import styles from './CountryList.module.scss'
import type { Country } from "../../types/country";

function CountriesList({ countries, selectedRegion, countryName }) {

    let filteredCountries = countries.filter((country: { name: { common: string; }; region: string; }) => {
        const matchSearch = country.name.common.toLowerCase().includes(countryName.toLocaleLowerCase());
        const matchRegion = selectedRegion === '' || selectedRegion === country.region;
        return matchSearch && matchRegion;
    });

    return (
        <>

            <div className={styles.countryList}>
                {filteredCountries.slice(0, 8).map((country: Country) => (
                    <Link key={country.name.official} to={`/country/${country.name.common}`}><CountryCard country={country} /></Link>
                ))}
            </div>

        </>
    )
}


export default CountriesList;