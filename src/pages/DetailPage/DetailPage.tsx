
import { useNavigate, Link } from "react-router";
import useCountryData from './../../hooks/useCountryData'
import styles from './DetailPage.module.scss'
import { useTheme } from "../../hooks/useTheme";
import Header from "../../components/Header/Header";
import SkeletonDetail from "../../components/SkeletonDetail/SkeletonDetail";

function DetailPage() {
    const {
        country, borderCountries
    } = useCountryData()
    const navigate = useNavigate();
    const { darkMode, toggleTheme } = useTheme();


    return (
        <div className={`appBody ${darkMode ? 'darkTheme' : ''}`}>
            <Header toggleTheme={toggleTheme} darkMode={darkMode} />
            <div className={styles.page}>
                {!country ? <SkeletonDetail /> :
                    <>
                        <button className={styles.backBtn} onClick={() => navigate(-1)}>
                            Back
                        </button>

                        <div className={styles.content}>
                            <div className={styles.flagWrapper}>
                                <img className={styles.flag} src={country.flags.svg} alt={country.flags.alt} />
                            </div>

                            <div className={styles.details}>
                                <h1 className={styles.name}>{country.name.common}</h1>

                                <div className={styles.infoColumns}>
                                    <div className={styles.infoLeft}>
                                        <p className={styles.detail}>
                                            <span className={styles.label}>Native Name: </span>
                                            {Object.values(country.name.nativeName)[0]?.common}
                                        </p>
                                        <p className={styles.detail}>
                                            <span className={styles.label}>Population: </span>
                                            {country.population.toLocaleString('en-US')}
                                        </p>
                                        <p className={styles.detail}>
                                            <span className={styles.label}>Region: </span>
                                            {country.region}
                                        </p>
                                        <p className={styles.detail}>
                                            <span className={styles.label}>Sub Region: </span>
                                            {country.subregion}
                                        </p>
                                        <p className={styles.detail}>
                                            <span className={styles.label}>Capital: </span>
                                            {country.capital?.join(', ')}
                                        </p>
                                    </div>

                                    <div className={styles.infoRight}>
                                        <p className={styles.detail}>
                                            <span className={styles.label}>Top Level Domain: </span>
                                            {country.tld?.[0]}
                                        </p>
                                        <p className={styles.detail}>
                                            <span className={styles.label}>Currencies: </span>
                                            {country.currencies ? Object.values(country.currencies).map(c => c.name).join(', ') : 'N/A'}
                                        </p>
                                        <p className={styles.detail}>
                                            <span className={styles.label}>Languages: </span>
                                            {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.borders}>
                                    <p className={styles.bordersLabel}>Border Countries:</p>
                                    <div className={styles.borderTags}>
                                        {borderCountries.map((item) => {
                                            return <Link className={styles.borderTag} key={item} to={`/country/${item}`}> {item} </Link>
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}


export default DetailPage;