import { useContext, useState } from "react"
import SearchByCountry from "../../components/SearchByCountry/SearchByCountry";
import FilterByRegion from "../../components/FilterByRegion/FilterByRegion";
import styles from './HomePage.module.scss'
import CountriesList from "../../components/CountriesList/CountriesList";
import CountryContext from "../../context/CountryContext";
import type { CountryContextType } from "../../context/CountryContext";
import { useDebounce } from "../../hooks/useDebounce";

function HomePage() {
    const [countryName, setCountryName] = useState('');
    const debouncedSearch = useDebounce(countryName, 300);
    const [selectedRegion, setSelectedRegion] = useState('');
    const { countries, isLoading } = useContext(CountryContext) as CountryContextType



    return (
        <>
            <div className={styles.container}>
                <SearchByCountry countryName={countryName} setCountryName={setCountryName} />
                <FilterByRegion setSelectedRegion={setSelectedRegion} />
            </div>
            <CountriesList isLoading={isLoading} countries={countries} selectedRegion={selectedRegion} countryName={debouncedSearch} />
        </>
    )
}

export default HomePage