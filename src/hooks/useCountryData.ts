import { useParams } from "react-router-dom";
import type { Country } from "../types/country";
import { useState, useEffect } from "react";

function useCountryData() {
  const { name } = useParams<string>();
  const [country, setCountry] = useState<Country | null>(null);
  const [borderCountries, setBorderCountries] = useState<string[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    async function fetchData() {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}`,
        );
        const result = await response.json();
        setCountry(result[0]);
        if (result[0].borders) {
          let borderString = result[0].borders.join(",");
          const res = await fetch(
            `https://restcountries.com/v3.1/alpha?codes=${borderString}`,
          );
          const data = await res.json();
          let countries = data.map((item) => item.name.common);
          setBorderCountries(countries);
        } else {
          setBorderCountries([]);
        }
      } catch (error) {}
    }

    fetchData();
  }, [name]);

  return {
    country,
    borderCountries,
  };
}

export default useCountryData;
