import { useState, useEffect } from "react"
import type { Country } from "./types/country"
import CountryCard from "./components/CountryCard/CountryCard";

function App() {

  const [countries, setCountries] = useState<Country[]>([])

  useEffect(() => {

    (async () => {
      const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital');
      const result: Country[] = await response.json();
      setCountries(result.sort(() => Math.random() - 0.5));
    })();
  }, [])

  console.log(countries)

  return (
    <>
      {countries.slice(0, 8).map((country) => (
        <CountryCard key={country.name.official} country={country} />
      ))}
    </>
  )
}

export default App
