
import type { Country } from "./../../types/country"

interface Props {
    country: Country;
}


function CountryCard({ country }: Props) {


    return (
        <>

            <div>
                <div>
                    <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
                </div>
                <div>
                    <h2>{country.name.common}</h2>
                    <p>{country.population.toLocaleString('en-US')}</p>
                    <p>{country.region}</p>
                    <p>{country.capital?.join(', ')}</p>
                </div>
            </div>

        </>
    )

}

export default CountryCard;