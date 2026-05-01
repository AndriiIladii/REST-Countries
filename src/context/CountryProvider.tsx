import { useState, useEffect } from "react"
import type { ReactNode } from "react"
import CountryContext from './CountryContext'
import { getAllCountries } from "../services/api"
import type { Country } from "../types/country"


const CountryProvider = ({ children }: { children: ReactNode }) => {
    const [countries, setCountries] = useState<Country[]>([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        (async () => {
            setIsLoading(true);
            const result = await getAllCountries();
            setCountries(result.sort(() => Math.random() - 0.5));
            setIsLoading(false);
        })();
    }, [])


    return (
        <CountryContext.Provider value={{ countries, isLoading }}>
            {children}
        </CountryContext.Provider>
    )
}

export default CountryProvider