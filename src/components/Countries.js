// import Button from "./Button";
import { Link } from 'react-router-dom';
// import Select from "./Select";
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
              <Link to='/details'>
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
        : filtered.length === 0
          ? <div className="loading"></div>
        : <div className="loading"></div>
      }
      </div>
    </section>
  )
}

export default Countries;
// {search === '' 
// ? <p>Search for countries</p>
// : filtered.length > 10 
//   ? <p>too many countries</p>
//   : filtered.length === 1 
//   ? <div>
//       <h1>{filtered[0].name}</h1> 
//       <p>Capital: {filtered[0].capital}</p>
//       <p>Population: {filtered[0].population.toLocaleString()}</p>
//       {/* <p>border countries: {filtered[0].borders.join(' ')}</p> */}
//       <h2>Languages</h2>
//         <ul>{filtered[0].languages.map((li, key) => <li key={key}>{li.name}</li>)}</ul>
//       <img src={filtered[0].flag} alt="flag" width='240px' height='150px'/>
//     </div>
//   : filtered.map((country,i) => 
//       <p key={i}>{country.name} 
//       <Button onClick={onClick} value={country.name} label='More details...'/>
//       </p>)
// }