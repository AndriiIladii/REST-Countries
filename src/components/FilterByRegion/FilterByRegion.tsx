import styles from './FilterByRegion.module.scss'

function FilterByRegion({ setSelectedRegion }) {


    return (
        <select className={styles.filterSelect} onChange={(e) => setSelectedRegion(e.target.value)}>
            <option value="">Filter By Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    )
}

export default FilterByRegion;