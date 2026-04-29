import CountryCard from "../CountryCard/CountryCard";
import SkeletonCard from "../SkeletonCard/SkeletonCard";
import { Link } from "react-router";
import styles from './CountryList.module.scss'
import type { Country } from "../../types/country";

interface CountriesListProps {
    isLoading: boolean;
    countries: Country[];
    selectedRegion: string;
    countryName: string;
}

function CountriesList({ isLoading, countries, selectedRegion, countryName }: CountriesListProps) {

    if (isLoading) {
        return (
            <div className={styles.countryList}>
                {Array.from({ length: 8 }).map((_, index) => (
                    <SkeletonCard key={index} />
                ))}
            </div>
        )
    }

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