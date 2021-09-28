import { Link } from 'react-router-dom';
import Filters from "./Filters";

const Countries = ({search, filtered, onClick, onChange, onChangeSelect}) => {

  return (
    <section className="countries flex">
      <Filters onChange={onChange} search={search} onChangeSelect={onChangeSelect} />
      <div className="countries-container">
      {
        filtered.length > 0 
        ? filtered.map((country,i) => 
            <div data-value={country.name} className="country-card" key={i}>
                <div className="flag-image">
                  <img src='https://restcountries.com/data/afg.svg' alt={`flag of ${country.name}`}/>
                </div>
              <Link to={`/details`}>
                  <div data-value={country.name} onClick={onClick} className="general-info">
                    <h4>{country.name}</h4>
                    <div><span>Population:</span> {country.population.toLocaleString()}</div>
                    <div><span>Region:</span> {country.region}</div>
                    <div><span>Capital:</span> {country.capital}</div>
                  </div>
              </Link>
              </div>)
        // : filtered.length > 25
        //   ? <div>too much countries</div>
        : filtered.length === 0
          ? <div className="loading"></div>
        : <div className="loading"></div>
      }
      </div>
    </section>
  )
}

export default Countries;