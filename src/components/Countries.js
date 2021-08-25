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
            <div className="country-card" key={i}>
              <Link to={`/details/${country.name}`}>
                <div onClick={onClick} data-val={country.name} className="flag-image">
                  <img src={country.flag} alt="flag"/>
                </div>
              </Link>
              <div className="general-info">
                <h4>{country.name}</h4>
                <div><span>Population:</span> {country.population.toLocaleString()}</div>
                <div><span>Region:</span> {country.region}</div>
                <div><span>Capital:</span> {country.capital}</div>
              </div>
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