import { useState, useEffect } from "react"
import type { Country } from "../../types/country"
import SearchByCountry from "../../components/SearchByCountry/SearchByCountry";
import FilterByRegion from "../../components/FilterByRegion/FilterByRegion";
import styles from './HomePage.module.scss'
import CountriesList from "../../components/CountriesList/CountriesList";
import { useTheme } from "../../hooks/useTheme";
import Header from "../../components/Header/Header";

function HomePage() {
    const { darkMode, toggleTheme } = useTheme();
    const [countries, setCountries] = useState<Country[]>([])
    const [countryName, setCountryName] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        (async () => {
            setIsLoading(true);
            const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital');
            const result: Country[] = await response.json();
            setCountries(result.sort(() => Math.random() - 0.5));
            setIsLoading(false);
        })();
    }, [])


    return (
        <div className={`appBody ${darkMode ? 'darkTheme' : ''}`}>
            <Header toggleTheme={toggleTheme} darkMode={darkMode} />
            <div className={styles.container}>
                <SearchByCountry countryName={countryName} setCountryName={setCountryName} />
                <FilterByRegion setSelectedRegion={setSelectedRegion} />
            </div>
            <CountriesList isLoading={isLoading} countries={countries} selectedRegion={selectedRegion} countryName={countryName} />
        </div>
    )
}

export default HomePage