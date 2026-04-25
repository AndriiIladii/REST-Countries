import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Country } from "../../types/country";

function DetailPage() {

    let { name } = useParams<string>();
    const [country, setCountry] = useState<Country | null>(null)

    useEffect(() => {

        (async () => {
            const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
            const result = await response.json();
            console.log(result)
            setCountry(result[0])
        })();
    }, [name])

    return (
        <>
            {!country ? <p>Loading...</p> :
                <div>
                    <button>Back</button>

                    <div>
                        <div>
                            <img src={country.flags.png} alt={country.flags.alt} />
                        </div>
                        <div>
                            <p>{Object.values(country.name.nativeName)[0]?.official}</p>
                            <p>{country.population.toLocaleString('en-US')}</p>
                            <p>{country.region}</p>
                            <p>{country.subregion}</p>
                            <p>{country.capital?.join(', ')}</p>
                            <p>{country.tld[0]}</p>
                            <p>{Object.values(country.currencies).map(c => c.name).join(', ')}</p>
                            <p>{Object.values(country.languages).join(', ')}</p>

                        </div>
                    </div>
                </div>}
        </>
    )
}


export default DetailPage;