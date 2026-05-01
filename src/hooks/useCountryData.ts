import { useParams } from "react-router-dom";
import type { Country } from "../types/country";
import { useState, useEffect } from "react";
import { getCountryByName, getCountriesByBorderCodes } from "../services/api";

function useCountryData() {
  const { name } = useParams<string>();
  const [country, setCountry] = useState<Country | null>(null);
  const [borderCountries, setBorderCountries] = useState<string[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    async function fetchData() {
      if (!name) return;
      try {
        const result = await getCountryByName(name);
        setCountry(result[0]);
        if (result[0].borders) {
          let borderString = result[0].borders.join(",");
          const data = await getCountriesByBorderCodes(borderString);
          let countries = data.map((item: any) => item.name.common);
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
