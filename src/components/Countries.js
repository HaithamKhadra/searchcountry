import { Link } from 'react-router-dom';
import Filters from "./Filters";

const Countries = ({ search, filtered, onClick, onChange, onChangeSelect }) => {

  return (
    <section className="countries flex">

      <Filters onChange={onChange} search={search} onChangeSelect={onChangeSelect} />

      <div className="countries__view">
        {
          filtered.length > 0
            ? filtered.map((country, i) =>
              <div data-value={country.name} className="countries__card" key={i}>
                <div className="countries__flag-container">
                  <img 
                    className="countries__flag-img"
                    src={`https://countries.petethompson.net/data/flags/${country.alpha3Code.toLowerCase()}.svg`} 
                    alt={`flag of ${country.name}`} />
                </div>
                <Link to={`/details`}>
                  <div data-value={country.name} onClick={onClick} className="countries__brief-info">
                    <h2 className="countries__name">{country.name}</h2>
                    <div><span className="countries__brief-infos">Population:</span> {country.population.toLocaleString()}</div>
                    <div><span className="countries__brief-infos">Region:</span> {country.region}</div>
                    <div><span className="countries__brief-infos">Capital:</span> {country.capital}</div>
                  </div>
                </Link>
              </div>)
            : filtered.length === 0
              ? <div className="loading"></div>
              : <div className="loading"></div>
        }
      </div>
    </section>
  )
}

export default Countries;