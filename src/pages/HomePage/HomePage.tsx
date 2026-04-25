import { useState, useEffect } from "react"
import type { Country } from "../../types/country"
import Header from "../../components/Header/Header";
import SearchByCountry from "../../components/SearchByCountry/SearchByCountry";
import FilterByRegion from "../../components/FilterByRegion/FilterByRegion";
import styles from './HomePage.module.scss'
import CountriesList from "../../components/CountriesList/CountriesList";

function HomePage() {


    const [countries, setCountries] = useState<Country[]>([])
    const [countryName, setCountryName] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('')

    useEffect(() => {

        (async () => {
            const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital');
            const result: Country[] = await response.json();
            setCountries(result.sort(() => Math.random() - 0.5));
        })();
    }, [])


    return (
        <>
            <Header />
            <div className={styles.container}>
                <SearchByCountry countryName={countryName} setCountryName={setCountryName} />
                <FilterByRegion setSelectedRegion={setSelectedRegion} />
            </div>
            <CountriesList countries={countries} selectedRegion={selectedRegion} countryName={countryName} />
        </>
    )
}

export default HomePage